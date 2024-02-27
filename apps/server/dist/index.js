"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("my-local-webapp");
const router_1 = require("./router");
const enums_1 = require("./constants/enums");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
app.use(enums_1.Routes.static, express_1.default.static('public'));
app.use(enums_1.Routes.home, router_1.HomeRoutes);
app.use(enums_1.Routes.about, router_1.AboutRoutes);
app.use(enums_1.Routes.projects, router_1.ProjectsRoutes);
app.use(enums_1.Routes.users, router_1.UsersRoutes);
app.listen(port, () => {
    console.log(`Server running at  http://${host}:${port}`);
});
