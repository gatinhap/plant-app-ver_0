import { FlowerSchemaType } from '../components/flowersPage/FlowersPage.types.ts';

export const paginate = (
  array: FlowerSchemaType['items'],
  pageSize: number,
) => {
  const pageCount = Math.ceil(array.length / pageSize);

  return Array.from({ length: pageCount }, (_, index) =>
    array.slice(index * pageSize, (index + 1) * pageSize),
  );
};
