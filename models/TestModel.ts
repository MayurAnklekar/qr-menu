import mongoose from 'mongoose'

const testScheme = new mongoose.Schema({
    name: String,
})

const Test = mongoose.models.Test || mongoose.model('Test', testScheme);

export default Test;
