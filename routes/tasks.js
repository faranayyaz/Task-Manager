var express = require("express");
require("../src/mongo/mongod");
const Task = require("../src/models/tasks");
const auth = require("../src/middlewares/auth");
var router = express.Router();

/* GET users listing. */
router.get("/", auth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split("_");
    sort[parts[0]] = parts[1] === "asc" ? 1 : -1;
  }

  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }

  try {
    // const data = await Task.find({ owner: req.user._id });
    await req.user
      .populate({
        path: "tasks",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.status(200).send(req.user.tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const data = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!data) return res.status(404).send();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    const data = await task.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/:id", auth, async (req, res) => {
  const alllowedUpdates = ["description", "completed"];
  const updates = Object.keys(req.body);
  const isvalidOrNot = updates.every((update) =>
    alllowedUpdates.includes(update)
  );

  if (!isvalidOrNot)
    return res.status(400).send({ error: "Invalid Operation" });

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) return res.status(404).send();

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const data = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!data) return res.status(404).send();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
