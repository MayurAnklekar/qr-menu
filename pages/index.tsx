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
   
    <h1 className="text-3xl font-bold bg-red-500">
      Hello world!
    </h1>

  );
}

export default Home
