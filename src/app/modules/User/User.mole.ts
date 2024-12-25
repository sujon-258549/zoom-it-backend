import mongoose, { Schema } from 'mongoose';
import { TUser } from './User.interface';
import bcrypt from 'bcrypt';

const UserSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

UserSchema.pre('save', async function name(next) {
  const user = this;
  user.password = bcrypt.hash(user.password);
});

// Create the User model
export const User = mongoose.model<TUser>('User', UserSchema);
