"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesModule = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("./courses.service");
const mongoose_1 = require("@nestjs/mongoose");
const courses_controller_1 = require("./courses.controller");
const platform_express_1 = require("@nestjs/platform-express");
const courses_schema_1 = require("./Schemas/courses.schema");
const user_module_1 = require("../user/user.module");
let CoursesModule = class CoursesModule {
};
CoursesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Courses',
                    schema: courses_schema_1.CoursesSchema,
                },
            ]),
            platform_express_1.MulterModule.register({
                dest: './Images',
            }),
        ],
        providers: [courses_service_1.CoursesService],
        controllers: [courses_controller_1.CoursesController],
        exports: [courses_service_1.CoursesService]
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;
//# sourceMappingURL=courses.module.js.map