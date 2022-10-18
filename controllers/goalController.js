import express from "express";
import asyncHandler from "express-async-handler";
import goalschema from "../models/schema.js";
export const createUser = asyncHandler(async function (req, res) {
  console.log(req.body);
  // res.status(200).json({ message: "Post creation " });
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field");
  }
  const goal = await goalschema.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

export const getUser = asyncHandler(async function (req, res) {
  const goals = await goalschema.find();
  res.status(200).json(goals);
});

export const updateUser = asyncHandler(async function (req, res) {
  const goal = await goalschema.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updateGoal = await goalschema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateGoal);
});

export const deleteUser = asyncHandler(async function (req, res) {
  const goal = await goalschema.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const deletedgoal = await goalschema.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedgoal);
});
