import { gql } from '@apollo/client';
import Client from './api';

type QueryType = string;

class GraphQL {
    get(query: QueryType) {
        return new Promise((resolve, reject) => {
            Client.query({
                query: gql`
            query {
              ${query}
            }
        `,
            })
                .then(({ data }) => resolve(data))
                .catch(err => reject(err));
        });
    }
}

export default new GraphQL();
