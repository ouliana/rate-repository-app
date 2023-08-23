import RepositoryItem from '../RepositoryItem';

const RepositoryInfo = ({ repository }) => {
  return (
    <RepositoryItem
      item={repository}
      isSingle={true}
    />
  );
};

export default RepositoryInfo;
