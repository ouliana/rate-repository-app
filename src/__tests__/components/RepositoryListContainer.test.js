import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    const repositories = {
      totalCount: 8,
      pageInfo: {
        hasNextPage: true,
        endCursor:
          'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
      },
      edges: [
        {
          node: {
            id: 'jaredpalmer.formik',
            fullName: 'jaredpalmer/formik',
            description: 'Build forms in React, without the tears',
            language: 'TypeScript',
            forksCount: 1619,
            stargazersCount: 21856,
            ratingAverage: 88,
            reviewCount: 3,
            ownerAvatarUrl:
              'https://avatars2.githubusercontent.com/u/4060187?v=4',
          },
          cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        {
          node: {
            id: 'async-library.react-async',
            fullName: 'async-library/react-async',
            description: 'Flexible promise-based React data loader',
            language: 'JavaScript',
            forksCount: 69,
            stargazersCount: 1760,
            ratingAverage: 72,
            reviewCount: 3,
            ownerAvatarUrl:
              'https://avatars1.githubusercontent.com/u/54310907?v=4',
          },
          cursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        },
      ],
    };

    describe('renders repository information correctly', () => {
      let repositoryItems, firstRepositoryItem, secondRepositoryItem;

      beforeEach(() => {
        render(<RepositoryListContainer repositories={repositories.edges} />);

        // screen.debug();
        repositoryItems = screen.getAllByTestId('repositoryItem');
        [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      });
      test('renders repository name correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik');
        expect(secondRepositoryItem).toHaveTextContent(
          'async-library/react-async'
        );
      });

      test('renders repository description correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent(
          'Build forms in React, without the tears'
        );
        expect(secondRepositoryItem).toHaveTextContent(
          'Flexible promise-based React data loader'
        );
      });

      test('renders repository language correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent('TypeScript');
        expect(secondRepositoryItem).toHaveTextContent('JavaScript');
      });

      test('renders repository forks count correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent('1.6k');
        expect(secondRepositoryItem).toHaveTextContent('69');
      });

      test('renders repository stargazers count correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent('21.9k');
        expect(secondRepositoryItem).toHaveTextContent('1.8k');
      });

      test('renders repository rating average correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent('88');
        expect(secondRepositoryItem).toHaveTextContent('72');
      });

      test('renders repository review count correctly', () => {
        expect(firstRepositoryItem).toHaveTextContent('3');
        expect(secondRepositoryItem).toHaveTextContent('3');
      });
    });
  });
});
