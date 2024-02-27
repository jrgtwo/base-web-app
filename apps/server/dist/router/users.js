"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const timeTracker_1 = require("../middleware/timeTracker");
const db_1 = require("../database/db");
const get_1 = require("../queries/get");
const router = express_1.default.Router();
router.use(timeTracker_1.timeTracker);
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.DB.query(get_1.Get.users);
    res.json(result.rows);
}));
exports.UsersRoutes = router;
