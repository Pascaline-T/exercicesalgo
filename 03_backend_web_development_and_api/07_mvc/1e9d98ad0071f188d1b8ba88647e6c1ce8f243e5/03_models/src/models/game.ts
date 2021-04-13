export type Game = {
  name: string;
  slug: string;
  [key: string]: any
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] {
    return this.collection.map((element) => {
      return {
        name: element.name,
        slug: element.slug,
        cover: element.cover_url
      }
    })
  }

  findBySlug(slug: string): Game | null {
    const findSlug = this.collection.find((element) => {
      if(element.slug === slug){
        return element
      }
      else {
        return undefined
      }
    });
    if(findSlug){
      return findSlug
    }
    else {
      return null
    }
  }

  findByPlatform(platform_slug: string): Game[] {
    return this.collection.filter((element) => {
      if(element.platform.slug === platform_slug){
        return {
          name: element.name,
          slug: element.slug
        }
      }
    })
  }

  getPlatforms(): Platform[] {
    const platforme = this.collection.map((element) => {
      return {
        name: element.name,
        slug: element.slug
      }
    });
    platforme.filter((item, index) => {
      return platforme.indexOf(item) === index
    })
    // const gameplat2 = Array.from(new Set(gameplateform));
    // return gameplat2;
    
    return platforme
  }
}
