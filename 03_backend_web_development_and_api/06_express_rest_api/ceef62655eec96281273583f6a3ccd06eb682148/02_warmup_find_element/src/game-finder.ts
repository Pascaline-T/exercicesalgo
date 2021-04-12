
export function findGameFromSlug(games: Game[], slug: string): Game {

  const tab = games.find((game) => {

    if(slug === game.slug){
      return game.slug
    }
    else{
      return undefined
    }
  });
    return tab
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
}
