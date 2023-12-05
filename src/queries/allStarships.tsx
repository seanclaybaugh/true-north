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
