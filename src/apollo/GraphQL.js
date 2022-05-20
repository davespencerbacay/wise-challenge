import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import TableError from "../components/table/TableError";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map((message) => {
      return <TableError message={message} />;
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({
    uri: process.env.REACT_APP_NETWORK_HTTP_URI,
  }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
