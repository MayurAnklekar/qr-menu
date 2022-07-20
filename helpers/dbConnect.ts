import mongoose from 'mongoose'

async function dbConnect(){

    if (mongoose.connection.readyState === 1) return

    return await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch(err => {
        console.log('Error connecting to database',err)
    })
    
}
export default dbConnect;