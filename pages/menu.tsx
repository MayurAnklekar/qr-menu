import type { NextPage } from 'next'
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { addCategory, getCategories } from 'helpers/APIs/category';
import {useForm} from 'react-hook-form';


const Home: NextPage = (props) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {

        try {
            const result = await addCategory(data)
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex flex-row">
            <div className="basis-1/2">

            <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                className="w-48"
                placeholder="Category"
                required
                {...register('name',{required:true})}
                name="name"
            />
            <Button type="submit" variant='subtle'>
                Add Category
            </Button>
        </form>
            {
                props.category.map((category) =>{
                    return <div key={category._id}>{category.name}</div>
                })
            }
            </div>
            <div className="basis-1/2">Food Items</div>
        </div>
        

    );
}

export const getServerSideProps = async () => {
    
    const {data} = await getCategories()
    console.log(data)
    return {
        props: {
            category: data
        }
    }
}

export default Home
