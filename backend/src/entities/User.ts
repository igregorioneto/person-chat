import { Schema, Model, model } from 'mongoose';
import { UserInterface } from '../interfaces/User';

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

export const User: Model<UserInterface> = model<UserInterface>('User', UserSchema);