import express from "express";
import User from "../models/User";
import errorParser from "../utils/errorParser";

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body.user;

  const user = new User({ email });

  user.setPassword(password);

  user
    .save()
    .then(signUser => {
      res.json({ user: signUser.toAuthJSON() });
    })
    .catch(ex => {
      res.status(400).json({ errors: errorParser(ex.errors) });
    });
});

export default router;
