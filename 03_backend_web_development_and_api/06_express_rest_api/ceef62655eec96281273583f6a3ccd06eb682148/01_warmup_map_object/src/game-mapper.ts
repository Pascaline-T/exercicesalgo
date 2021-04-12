
export function gameMapper(games: GameWithALotOfData[]): Game[] {
  return games.map((game) => {
    const finalResult = {
      name : game.name,
      slug : game.slug,
      cover : game.cover.url
    }
  return finalResult;
  }) 
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
}

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  }
}
