import mongoose, {Schema} from 'mongoose';

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    restId: {
        type: Schema.Types.ObjectId,
        ref: 'restaurant'
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }],
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    size: {
        type: Number,
        required: false,
    },
    avalibility: {
        type: Boolean,
        required: true,
    },
    ingredientWarning: {
        type: String,
        required: false
    },
    preparationTime:{
        type: Number,
        required: false,
    },
    modifierGroup:{
        type: String,
        required: false,
    }
});

const Dish = mongoose.models.Dish || mongoose.model('Dish', dishSchema);

export default Dish;