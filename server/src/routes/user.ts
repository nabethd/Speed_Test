import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Sequelize } from "sequelize-typescript";
import { enrichUserData, guessGender } from "../enrichUser";
import User from "../mySql/model";

const router = express.Router();

router.get("/game/user", async (req: Request, res: Response) => {
  const users = await User.findAll({
    order: [["score", "DESC"]],
  });

  res.status(200).send({ users });
});

router.post(
  "/game/user",
  [body("userName").not().isEmpty().withMessage("userName must be provided")],
  async (req: Request, res: Response) => {
    const { userName } = req.body;

    try {
      const existingUser = await User.findOne({
        where: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          Sequelize.fn("LOWER", userName)
        ),
      });

      if (existingUser) {
        return res.status(400).send("Username already exists");
      }

      const gender = await guessGender(userName);
      const userData = await enrichUserData(gender, userName);
      const user = await User.create(userData);
      console.log("User created:", user.toJSON());
      res.status(201).send({ userData });
    } catch (error) {
      console.error("Failed to create user:", error);
      res.status(500).send(error);
    }
  }
);

export { router as userRouter };
