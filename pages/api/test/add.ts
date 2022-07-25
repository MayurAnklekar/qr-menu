import dbConnect from '../../../helpers/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next'
import Test from '../../../models/TestModel'


dbConnect()

type Data = {
    name: string
}

async function addCategory(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body as Data
    const test = new Test({ name })
    await test.save()
    return res.status(200).json({ message: 'Category added' })
}

export default addCategory;