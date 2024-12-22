import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { FlowerSchemaType } from '../FlowersPage.types.ts';
import { FlowerSchema } from '../FlowersPage.schema.ts';
import { flowerQueryKey } from '../../../Backend.constants.ts';

export const useFlowerData = () => {
  const getData = async (): Promise<FlowerSchemaType['items'] | undefined> => {
    const response = await fetch('mock-api/flowers');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: unknown = await response.json();

    const parsed = FlowerSchema.safeParse(data);

    return parsed.data?.items;
  };

  const { data, isError, isPending } = useQuery({
    queryKey: [flowerQueryKey],
    queryFn: getData,
  });

  return useMemo(
    () => ({
      data,
      isError,
      isPending,
    }),
    [data, isError, isPending],
  );
};
