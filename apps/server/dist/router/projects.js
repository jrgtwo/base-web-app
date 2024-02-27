"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const timeTracker_1 = require("../middleware/timeTracker");
const router = express_1.default.Router();
router.use(timeTracker_1.timeTracker);
router.get('/', (_, res) => {
    res.send('Projects!');
});
exports.ProjectsRoutes = router;