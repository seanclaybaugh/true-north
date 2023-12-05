export const ALL_STARSHIPS_QUERY = `
    query {
      allStarships {
        starships {
          MGLT
          cargoCapacity
          consumables
          costInCredits
          created
          crew
          edited
          hyperdriveRating
          id
          length
          manufacturers
          maxAtmospheringSpeed
          model
          name
          passengers
          starshipClass
          filmConnection {
            films {
              title
            }
          }
        }
      }
    }
  `;


  const test = {
    MGLT: 60,
    __typename: 'Starship',
    cargoCapacity: 3000000,
    consumables: '1 year',
    costInCredits: 3500000,
    created: '2014-12-10T14:20:33.369000Z',
    crew: '30-165',
    edited: '2014-12-20T21:23:49.867000Z',
    filmConnection: {__typename: 'StarshipFilmsConnection', films: [Array]},
    hyperdriveRating: 2,
    id: 'c3RhcnNoaXBzOjI=',
    length: 150,
    manufacturers: ['Corellian Engineering Corporation'],
    maxAtmospheringSpeed: 950,
    model: 'CR90 corvette',
    name: 'CR90 corvette',
    passengers: '600',
    starshipClass: 'corvette',
  };