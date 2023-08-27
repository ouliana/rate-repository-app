export const orderPrinciples = {
  'Latest repositories': {
    orderBy: 'CREATED_AT',
    orderDirection: 'ASC',
  },
  'Highest rated repositories': {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
  },
  'Lowest rated repositories': {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
  },
};

export const orderValues = Object.keys(orderPrinciples);

export const initialValue = Object.keys(orderPrinciples)[0];
