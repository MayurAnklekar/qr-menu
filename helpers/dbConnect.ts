import mongoose from 'mongoose'
import Test from 'models/TestModel'

const dbConnect = async () => {


    return await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch(err => {
        console.log('Error connecting to database',err)
    })
    
}
export default dbConnect;