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
      const avantThen = 
      await this.collection
      .find({})
      .toArray()
      const apresThen = 
        avantThen.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        });
        return apresThen
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
    const beforeThen = 
    await
    this.collection
    .findOne({ slug })
    const afterThen = beforeThen.find
      if (slug) {
        return afterThen;
      }
      return afterThen
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
    const avant= 
      await
      this.collection
      .find()
      .toArray()
      const apres = 
        avant.filter((plateform) => {
          if (plateform.platform.slug === platform_slug) {
            return {
              name: plateform.name,
              slug: plateform.slug,
            };
          }
      });
      return apres
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
    const result: Platform[] = [];
    const before = 
    await
    this.collection
      .find()
      .toArray()
      const after = 
        before.forEach((game) => {
          if (
            result.find((platform) => {
              return game.platform.slug === platform.slug;
            }) === undefined
          ) {
            result.push({
              name: game.platform.name,
              slug: game.platform.slug,
            });
          return after
          }
        });
        return result
  }
}
