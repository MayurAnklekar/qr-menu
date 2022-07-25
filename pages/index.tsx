import type { NextPage } from 'next'
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import {addCategory} from 'helpers/APIs/category';


const Home: NextPage = () => {

  const handleSubmit = async () => {

    try{
      const result = await addCategory({ 
        name: 'test',
      })
    }
    catch(err){
      console.log(err);
    }
  }

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
