import type { NextPage } from 'next'
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import addCategory from './api/test/add';


const Home: NextPage = () => {
  // const handleSubmit = async () => {
  //   const res = await addCategory({
  //     category: 'test'
  //   });
  // }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder="Category"
        required
      />
      <Button type="submit" variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        Add Category
      </Button>
    </form>

  );
}

export default Home
