export type Game = {
    name: string;
    slug: string;
    [key: string]: any;
  };
  export type Platform = {
    name: string;
    slug: string;
    [key: string]: any;
  };
  export class GameModel {
    collection: Game[];
    constructor(collection: Game[]) {
      this.collection = collection;
    }
    // getAll(): Promise<Game[]> {
    // return new Promise((resolve) => {
    //   resolve(this.collection.map((game) => {
    //     return {
    //       name: game.name,
    //       slug: game.slug,
    //       cover: game.cover_url,
    //     };
    //   }));
    //  })
    // }

    getAll(): Promise<Game[]> {
          return this.collection
            .find({})
            .toArray()
            .then((doc) =>
              doc.filter((game) => {
                return {
                  name: game.name,
                  slug: game.slug,
                  cover: game.cover_url,
                };
                }),
            )
    }










    findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
      const gameSlug = this.collection.find((game) => {
        if (game.slug === slug) {
          return game;
        } else {
          return undefined;
        }
      });
      if (gameSlug) {
        resolve (gameSlug);
      } else {
        resolve(null);
      }
     })
    }

    findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(this.collection.filter((plateform) => {
        if (plateform.platform.slug === platform_slug) {
          return {
            name: plateform.name,
            slug: plateform.slug,
          };
        }
      }));
     })
    }
    getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
      const result: Platform[] = [];
      this.collection.forEach((game) => {
        if (
          result.find((platform) => {
            return game.platform.slug === platform.slug;
          }) === undefined
        ) {
          result.push({
            name: game.platform.name,
            slug: game.platform.slug,
          });
        }
      });
      resolve (result);
     })
    }
  }