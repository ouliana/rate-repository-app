import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
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

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      ownerAvatarUrl
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
