interface Film {
  title: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: number;
  length: number;
  crew: number;
  passengers: number;
  cargoCapacity: number;
  consumables: string;
  hyperdriveRating: number;
  starshipClass: string;
  filmConnection: {
    films: Film[];
  };
}

export interface AllStarshipsResponse {
  allStarships: {
    starships: Starship[];
  };
}
