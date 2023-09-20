export const orderPrinciples = {
  'Latest repositories': {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    label: 'latest',
  },
  'Highest rated repositories': {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
    label: 'highest',
  },
  'Lowest rated repositories': {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
    label: 'lowest',
  },
};

export const orderValues = Object.keys(orderPrinciples);

export const initialValue = Object.keys(orderPrinciples)[0];
