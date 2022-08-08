import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'helpers/dbConnect'
import Category from 'models/categoryModel'

dbConnect()

type Data = {
    name: string
}

async function addCategory(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    switch(method)
    {
        case 'POST':
            const { name } = req.body as Data
            const test = new Category({ name })
            await test.save()
            return res.status(200).json({ message: 'Category added' })
        case 'GET':
            const categories = await Category.find();
            return res.status(200).json({data: categories});
        default:
            return res.status(404).send('Method type not found.')
    }
    
}



export default addCategory;