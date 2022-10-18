import express from "express";
import asyncHandler from "express-async-handler";
export const createUser = asyncHandler(async function (req, res) {
  console.log(req.body);
  // res.status(200).json({ message: "Post creation " });
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field");
  }
});

export const getUser = asyncHandler(async function (req, res) {
  res.status(200).json({ message: "Get creation " });
});

export const updateUser = asyncHandler(function (req, res) {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

export const deleteUser = asyncHandler(function (req, res) {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});
