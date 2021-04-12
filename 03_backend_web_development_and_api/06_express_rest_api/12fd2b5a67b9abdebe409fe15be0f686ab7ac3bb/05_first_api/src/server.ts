import express, { Request, Response } from "express";
import games from "./games.json";

const app = express();

app.get("/", (request : Request, response: Response) => {
    response.status(400)
    response.send({ "error": "Wrong resource" });
})

app.get("/games", (request : Request, response: Response) => {
    response.status(200)
    response.json(games.map((game) => {
        const finalResult = {
            name : game.name,
            slug : game.slug,
            cover : game.cover_url
        }
        return finalResult;
    }))
})


export { app };
