import express, { Request, Response } from "express";
import { body } from "express-validator";
import User from "../mySql/model";

const router = express.Router();

router.post(
  "/game/score",
  [
    body("score").not().isEmpty().withMessage("score must be provided"),
    body("userName").not().isEmpty().withMessage("userName must be provided"),
  ],
  async (req: Request, res: Response) => {
    const { score, userName } = req.body;
    try {
      // Find the user in the database
      const user = await User.findOne({ where: { name: userName } });

      if (!user) {
        return res.status(404).send("User not found");
      }

      // Update the user's score by adding the provided score
      user.score += score;
      await user.save();

      res.status(200).send({ userName, score: user.score });
    } catch (error) {
      console.error("Failed to update user score:", error);
      res.status(500).send("Failed to update user score");
    }
  }
);

export { router as scoreRouter };
