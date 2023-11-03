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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(usersModel, coursesModel) {
        this.usersModel = usersModel;
        this.coursesModel = coursesModel;
    }
    async getUser(email) {
        return await (await this.usersModel.findOne({ email })).populate(["student", "courses_enrolled", "courses_created"]);
    }
    async getAllUsers() {
        const users = await this.usersModel.find();
        const count = await this.usersModel.count();
        return { users, count };
    }
    async createUser(userInfo) {
        const { first_name, last_name, password, email } = userInfo;
        const [hashedPwd, salt] = await this.hashPwd(password);
        return await this.usersModel.create({ first_name, last_name, email, password: hashedPwd, salt, profile_picture: "" });
    }
    async updateUser(original_email, userInfo) {
        const { first_name, last_name, password, email } = userInfo;
        let updateObj = {};
        if (first_name)
            updateObj.first_name = first_name;
        if (last_name)
            updateObj.last_name = last_name;
        if (email)
            updateObj.email = email;
        if (password) {
            const [hashedPwd, salt] = await this.hashPwd(password);
            updateObj.password = hashedPwd;
            updateObj.salt = salt;
        }
        console.log(updateObj);
        return await this.usersModel.findOneAndUpdate({ email: original_email }, updateObj, { returnDocument: "after" }).populate(["student", "courses_enrolled", "courses_created"]);
    }
    async isUserEnrolled(email, id) {
        const user = await this.usersModel.findOne({ email });
        const userEnrolled = user.courses_enrolled;
        const isEnrolled = Array.prototype.some.call(userEnrolled, (courseId) => courseId === id);
        return isEnrolled;
    }
    async isUserInstructor(email) {
        const user = await this.usersModel.findOne({ email });
        return Boolean(user.student);
    }
    async enrollUser(email, id) {
        const course = await this.coursesModel.findByIdAndUpdate(id, { $inc: { student_number: 1 } }, { returnDocument: "after" }).populate("instructor");
        if (!course)
            throw new common_1.NotFoundException('Course Not Found');
        const user = await this.usersModel.findOneAndUpdate({ email }, { $addToSet: { courses_enrolled: id } }, { returnDocument: "after" }).populate(["student", "courses_enrolled", "courses_created"]);
        const instructorEmail = course.instructor.email;
        await this.addStudent(instructorEmail, user.id);
        return user;
    }
    async addCourse(ori_id, id) {
        return this.usersModel.findByIdAndUpdate(ori_id, { $addToSet: { courses_created: id } }, { returnDocument: "after" }).populate(["student", "courses_enrolled", "courses_created"]);
    }
    async deleteCourse(email, id) {
        return this.usersModel.findOneAndUpdate({ email }, { $pop: { courses_created: id } }, { returnDocument: "after" }).populate(["student", "courses_enrolled", "courses_created"]);
    }
    async addStudent(email, id) {
        return this.usersModel.findOneAndUpdate({ email }, { $addToSet: { student: id } }, { returnDocument: "after" }).populate(["student", "courses_enrolled", "courses_created"]);
    }
    async insertImage(email, imageUrl) {
        return await this.usersModel.findOneAndUpdate({ email }, { profile_picture: imageUrl }, { returnDocument: "after" }).populate(["student", "courses_enrolled", "courses_created"]);
    }
    async deleteUser(email) {
        return await this.usersModel.findOneAndDelete({ email });
    }
    async hashPwd(password) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPwd = await bcrypt.hash(password, salt);
        return [hashedPwd, salt];
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("Users")),
    __param(1, (0, mongoose_2.InjectModel)("Courses")),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map