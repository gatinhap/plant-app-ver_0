import { useQuery } from '@tanstack/react-query';
import { flowerQueryKey } from '../../Backend.constants.ts';

const FlowersPage = () => {
  const getData = async () => {
    const response = await fetch('mock-api/flowers');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    return data.items;
  };

  const { data } = useQuery({
    queryKey: [flowerQueryKey],
    queryFn: getData,
  });

  if (data) {
    return (
      <>
        <h3>Flower schema component</h3>
        {data.map((flower) => (
          <h6 key={flower.name}>{flower.name}</h6>
        ))}
      </>
    );
  }
};

export default FlowersPage;
