"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("../controllers/article"));
const express = require('express');
const router = express.Router();
router.get('/', article_1.default.findAll);
router.post('/', article_1.default.create);
router.put('/:id', article_1.default.update);
router.delete('/:id', article_1.default.deleteData);
router.get('/:id', article_1.default.findOne);
module.exports = router;
