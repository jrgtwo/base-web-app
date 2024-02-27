"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeTracker = void 0;
const timeTracker = (req, _, next) => {
    console.log('Time: ', Date.now(), ' Path: ', req.path);
    next();
};
exports.timeTracker = timeTracker;
