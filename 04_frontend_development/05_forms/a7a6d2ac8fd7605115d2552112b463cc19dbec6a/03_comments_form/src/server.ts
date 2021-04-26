import express, {Request, Response} from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import nunjucks from "nunjucks";

const clientWantsJson = (request: express.Request): boolean =>
  request.get("accept") === "application/json";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  nunjucks.configure("src/views", {
    autoescape: true,
    express: app,
  });

  const formParser = express.urlencoded({ extended: true });

  app.set("view engine", "njk");



  app.get("/", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      response.render("home");
    }
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if (clientWantsJson(request)) {
        response.json(games);
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        if (clientWantsJson(request)) {
          response.json(game);
        } else {
          response.render("game", { game });
        }
      }
    });
  });

  app.post("/games/:game_slug/comments", formParser, (request: Request, response: Response) => {
    gameModel.addComment(request.params.game_slug, request.body.message).then((commentaire) => {
      if (clientWantsJson(request)) {
        response.json(commentaire);
      } else {
        console.log(commentaire)
        response.render("game", {
          message: request.body.commentaire
        })
      }
    })
  })
  return app;
}
