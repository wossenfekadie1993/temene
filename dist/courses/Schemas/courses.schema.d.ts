import mongoose from 'mongoose';
export declare class Courses {
    title: string;
    thumbnail: string;
    instructor: mongoose.Schema.Types.ObjectId;
    price: number;
    duration: number;
    student_number: number;
    description: string;
    language: string;
    level: string;
}
export declare const CoursesSchema: mongoose.Schema<Courses, mongoose.Model<Courses, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Courses>;
