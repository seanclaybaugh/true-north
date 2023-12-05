import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

interface Starship {
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
}

interface AllStarshipsResponse {
  allStarships: {
    starships: Starship[];
  };
}

const ALL_STARSHIPS_QUERY = gql`
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
      }
    }
  }
`;

client
  .query<AllStarshipsResponse>({
    query: ALL_STARSHIPS_QUERY,
  })
  .then(result => console.log(result.data.allStarships));

AppRegistry.registerComponent(appName, () => App);
