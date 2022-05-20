import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import Table from "./components/table";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/GraphQL";

export const applicantBriefInfo = {
  name: "Dave Spencer Bacay",
  dateTaken: "May 20, 2022",
};

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <ApolloProvider client={client}>
          <Table />
        </ApolloProvider>
      </Container>
    </React.Fragment>
  );
};

export default App;
