import RepositoryItem from '../RepositoryItem';

const SingleRepositoryContainer = ({ repository }) => {
  return (
    <RepositoryItem
      item={repository}
      isSingle={true}
    />
  );
};

export default SingleRepositoryContainer;
