import type { NextPage } from 'next'
import { Button } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
      Add Category
    </Button>
  );
}

export default Home
