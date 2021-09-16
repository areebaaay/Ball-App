import mongoose from 'mongoose';

const ballSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    ownedBy: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
      },
    ],
    image: {
      type: String,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Balls = mongoose.Model('Ball', ballSchema);

export default Balls;
