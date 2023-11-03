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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesSchema = exports.Courses = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Courses = class Courses {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Courses.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Courses.prototype, "thumbnail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "Users", type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Courses.prototype, "instructor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Courses.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Courses.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Courses.prototype, "student_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Courses.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Courses.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Courses.prototype, "level", void 0);
Courses = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Courses);
exports.Courses = Courses;
exports.CoursesSchema = mongoose_1.SchemaFactory.createForClass(Courses);
//# sourceMappingURL=courses.schema.js.map