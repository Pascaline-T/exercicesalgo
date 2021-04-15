import { Collection } from "mongodb";
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
  collection: Collection;
  constructor(collection: Collection) {
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
      .then((mytab) => {
        return mytab.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        });
      });
  }

  // findBySlug(slug: string): Promise<Game | null> {
  // return new Promise((resolve) => {
  //   const gameSlug = this.collection.find((game) => {
  //     if (game.slug === slug) {
  //       return game;
  //     } else {
  //       return undefined;
  //     }
  //   });
  //   if (gameSlug) {
  //     resolve (gameSlug);
  //   } else {
  //     resolve(null);
  //   }
  //  })
  // }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection.findOne({ slug }).then((mytab2) => {
      if (slug) {
        return mytab2;
      }
    });
  }

  // findByPlatform(platform_slug: string): Promise<Game[]> {
  //   return new Promise((resolve) => {
  //     resolve(this.collection.filter((plateform) => {
  //       if (plateform.platform.slug === platform_slug) {
  //         return {
  //           name: plateform.name,
  //           slug: plateform.slug,
  //         };
  //       }
  //     }));
  //    })
  //   }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((mytab3) => {
        return mytab3.filter((plateform) => {
          if (plateform.platform.slug === platform_slug) {
            return {
              name: plateform.name,
              slug: plateform.slug,
            };
          }
        });
      });
  }

  // getPlatforms(): Promise<Platform[]> {
  //   return new Promise((resolve) => {
  //     const result: Platform[] = [];
  //     this.collection.forEach((game) => {
  //       if (
  //         result.find((platform) => {
  //           return game.platform.slug === platform.slug;
  //         }) === undefined
  //       ) {
  //         result.push({
  //           name: game.platform.name,
  //           slug: game.platform.slug,
  //         });
  //       }
  //     });
  //     resolve (result);
  //    })
  //   }
  // }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((mytab4) => {
        const result: Platform[] = [];
        mytab4.forEach((game) => {
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
        return result;
      });
  }
}
