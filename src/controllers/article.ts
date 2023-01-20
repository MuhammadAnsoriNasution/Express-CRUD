import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAll(req: Request, res: Response) {
    const users = await prisma.article.findMany({ where: { published: true } });
    res.json(users)
}

async function findOne(req: Request, res: Response) {
    const { id } = req.params
    const users = await prisma.article.findUnique({ where: { id: parseInt(id) } });
    res.json(users)
}

async function create(req: Request, res: Response) {
    const data = req.body
    const users = await prisma.article.create({ data: data });
    res.json(users)
}

async function update(req: Request, res: Response) {
    const { id } = req.params
    const data = req.body
    const users = await prisma.article.update({ where: { id: parseInt(id) }, data });
    res.json(users)
}

async function deleteData(req: Request, res: Response) {
    const { id } = req.params
    const users = await prisma.article.delete({ where: { id: parseInt(id) } });
    res.json(users)
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleteData
}