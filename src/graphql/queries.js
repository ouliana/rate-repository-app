import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repository {
    repositories {
      edges {
        node {
          fullName
          ownerAvatarUrl
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;
