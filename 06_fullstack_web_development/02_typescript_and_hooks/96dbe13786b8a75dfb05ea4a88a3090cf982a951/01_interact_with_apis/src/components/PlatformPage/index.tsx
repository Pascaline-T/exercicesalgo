import React from "react";
import { Platform } from "../../types/Platform";
import { Game } from "../../types/Platform";

type Platforms = Platform[];

const PlatformPage = (): JSX.Element => {
  ///////////////////////////////
  // Fetch pour les platforms //
  ///////////////////////////////
  const [platforms, setPlatforms] = React.useState<Platforms>([]);

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", { headers: { accept: "application/json" } }).then(
      async (response) => {
        setPlatforms(await response.json());
      },
    );
  }, []);
  // console.log("PLATFORMS", platforms);

  /////////////////////////////////
  // Fetch pour le slug des jeux //
  /////////////////////////////////

  const [slug, setSlug] = React.useState<Game>();

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/games", { headers: { accept: "application/json" } }).then(
      async (response) => {
        setSlug(await response.json());
      },
    );
  }, []);

  console.log("SLUG", slug);

  return (
    <div>
      <p>
        {platforms.length > 0 ? (
          <select>
            {platforms.map((platform) => (
              <option key={platform.name} value={platform.name}>
                {platform.name}
              </option>
            ))}
          </select>
        ) : null}
      </p>
    </div>
  );
};

export default PlatformPage;
