"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../user/user.service");
let CoursesService = class CoursesService {
    constructor(coursesModel, userService) {
        this.coursesModel = coursesModel;
        this.userService = userService;
    }
    async createCourse(id, courseDetail) {
        const course = await (await this.coursesModel.create(Object.assign(Object.assign({}, courseDetail), { instructor: id, student_number: 0, thumbnail: "" }))).populate("instructor");
        const courseID = course.id;
        await this.userService.addCourse(id, courseID);
        return course;
    }
    async getCourse(id) {
        const course = this.coursesModel.findById(id).populate("instructor");
        if (!course)
            throw new common_1.NotFoundException('Course Not Found');
        return course;
    }
    async getAllCourses(queryString) {
        const queryObj = Object.assign({}, queryString);
        if (queryObj.search)
            delete queryObj.search;
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        let searchQuery = { title: {
                $regex: queryString.search || "",
                $options: 'i',
            }, };
        const courses = await this.coursesModel.find(Object.assign(Object.assign({}, JSON.parse(queryStr)), searchQuery)).populate("instructor").exec();
        const count = await this.coursesModel.count(Object.assign(Object.assign({}, JSON.parse(queryStr)), searchQuery));
        return { courses, count };
    }
    async updateCourse(id, courseInfo) {
        const { title, price, description, language, level } = courseInfo;
        let updateObj = {};
        if (title)
            updateObj.title = title;
        if (price)
            updateObj.price = price;
        if (description)
            updateObj.description = description;
        if (language)
            updateObj.language = language;
        if (level)
            updateObj.level = level;
        return await this.coursesModel.findByIdAndUpdate(id, updateObj, { returnDocument: "after" }).populate("instructor");
    }
    async insertImage(id, imageUrl) {
        return await this.coursesModel.findByIdAndUpdate(id, { thumbnail: imageUrl }, { returnDocument: "after" }).populate("instructor");
    }
    async deleteCourse(id, email) {
        await this.coursesModel.findByIdAndDelete(id);
        this.userService.deleteCourse(email, id);
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Courses")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map