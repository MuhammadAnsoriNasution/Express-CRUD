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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.article.findMany({ where: { published: true } });
        res.json(users);
    });
}
function findOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const users = yield prisma.article.findUnique({ where: { id: parseInt(id) } });
        res.json(users);
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const users = yield prisma.article.create({ data: data });
        res.json(users);
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const users = yield prisma.article.update({ where: { id: parseInt(id) }, data });
        res.json(users);
    });
}
function deleteData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const users = yield prisma.article.delete({ where: { id: parseInt(id) } });
        res.json(users);
    });
}
exports.default = {
    findAll,
    findOne,
    create,
    update,
    deleteData
};
