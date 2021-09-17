import Ball from '../models/ballModel.js';
import asyncHandler from 'express-async-handler';

// @desc Fetch all balls
// route GET /api/balls
// access Public
const getBalls = asyncHandler(async (req, res) => {
  const balls = await Ball.find();
  res.json(balls);
});

// @desc Delete a ball
// route DELETE /api/balls/:id
// access Private/Admin
const deleteBall = asyncHandler(async (req, res) => {
  const ball = await Ball.findById(req.params.id);
  if (ball) {
    await ball.remove();
    res.json({ message: 'Ball removed' });
  } else {
    res.status(404);
    throw new Error('Ball not found!!');
  }
});

// @desc Create a new ball
// route POST /api/balls
// access Private/Admin
const createBall = asyncHandler(async (req, res) => {
  console.log('Create ball controller');
  console.log('Checking user id for create', req.user._id);
  const { name, image, inStock } = req.body;
  const ball = new Ball({
    name,
    user: req.user._id,
    image,
    inStock,
  });

  const createdBall = await ball.save();
  res.status(201).json(createdBall);
});

// @route   patch api/balls/own/:ball_id
// @desc    Own Ball
const ownBall = asyncHandler(async (req, res) => {
  console.log('own ball controller');
  console.log('req user', req.body);

  const ball = await Ball.findById(req.params.ball_id);

  if (ball) {
    ball.ownedBy.unshift({ user: req.user._id });
    ball.inStock = ball.inStock - 1;

    const updatedBall = await ball.save();
    res.json(updatedBall.ownedBy);
  } else {
    res.status(404);
    throw new Error('Ball not found');
  }
});

// @route   patch api/balls/return/:ball_id
// @desc    Own Ball
// @access  Private
const returnBall = asyncHandler(async (req, res) => {
  console.log(`Inside return controller`);
  const ball = await Ball.findById(req.params.ball_id);
  if (ball) {
    // If ball in already not owned
    if (
      ball.ownedBy.filter((own) => own.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Post already UnLiked' });
    }

    const removeIndex = ball.ownedBy
      .map((own) => own.user.toString())
      .indexOf(req.user._id);

    ball.ownedBy.splice(removeIndex, 1);

    ball.inStock = ball.inStock + 1;

    const updatedBall = await ball.save();

    res.json(updatedBall.ownedBy);
  } else {
    res.status(404);
    throw new Error('Ball not found');
  }
});

export { getBalls, createBall, deleteBall, ownBall, returnBall };
