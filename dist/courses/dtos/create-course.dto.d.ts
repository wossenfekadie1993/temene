import mongoose from "mongoose";
export declare class createCourseDto {
    title: string;
    instructor: mongoose.Schema.Types.ObjectId;
    price: number;
    duration: number;
    description: string;
    language: string;
    level: string;
}
