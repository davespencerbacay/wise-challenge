import { gql } from "@apollo/client";

export const LOAD_EPOCH = gql`
  query {
    epoches {
      id
      startBlock
      endBlock
      signalledTokens
      stakeDeposited
      totalQueryFees
      taxedQueryFees
      totalRewards
      totalIndexerRewards
      totalDelegatorRewards
    }
  }
`;
