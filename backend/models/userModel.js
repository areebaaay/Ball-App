import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
  //Here this is referring to that user
};

//This method would run before something is saved in  User Model
//This save could also be a result of UPDATE/PUT
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
    //This would make sure that this method is run only when password is changed
    //Or when a new user instance is created
    //And not when the name/email fields are updated
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;