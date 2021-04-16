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

  async getAll(): Promise<Game[]> {
      this.collection
      .find({})
      .toArray()
      const mytab = await this.collection
        return mytab.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
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

  async findBySlug(slug: string): Promise<Game | null> {
    this.collection
    .findOne({ slug })
    const mytab2 = await this.collection
      if (slug) {
        return mytab2;
      }
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

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    this.collection
      .find()
      .toArray()
      mytab3 = await this.collection
        return mytab3.filter((plateform) => {
          if (plateform.platform.slug === platform_slug) {
            return {
              name: plateform.name,
              slug: plateform.slug,
            };
          }
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

  async getPlatforms(): Promise<Platform[]> {
    this.collection
      .find()
      .toArray()
      const mytab4 = await this.collection
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
  }
}
