import express, { Express, Request, Response } from 'express';
const articleRoutes = require('./article')
const app: Express = express();

app.use('/articles', articleRoutes)

module.exports = {
    routes: app
}