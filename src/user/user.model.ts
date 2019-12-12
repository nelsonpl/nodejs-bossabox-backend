import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema<User>({
    username: { type: String, lowercase: true, trim: true },
    password: String
});

export interface User extends Document {
    id: string;
    username: String,
    password: String
};