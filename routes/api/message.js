const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");

//@route GET api/message/
//@desc Get inbox
//@access Private

router.get(
  "/",

  auth,

  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      res.json(user.inbox);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route POST api/message/:id - to id
//@desc Send a message
//@access Private

router.post(
  "/:id",
  [
    auth,
    [
      check("message", "A message must be included")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.params.id);
      const from = await User.findById(req.user.id);

      if (user._id === from._id)
        return res.send("Can't send message to yourself");

      const newMessage = {
        text: req.body.message,
        from: from,
        name: from.name
      };
      user.inbox.unshift(newMessage);
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
