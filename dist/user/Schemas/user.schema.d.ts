import mongoose from "mongoose";
export declare class Users {
    first_name: string;
    last_name: string;
    profile_picture: string;
    email: string;
    password: string;
    salt: string;
    student: mongoose.Schema.Types.ObjectId[];
    courses_enrolled: mongoose.Schema.Types.ObjectId[];
    courses_created: mongoose.Schema.Types.ObjectId[];
}
export declare const UsersSchema: mongoose.Schema<Users, mongoose.Model<Users, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Users>;
