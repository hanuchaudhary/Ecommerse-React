const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/eCommerceDb")
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));


const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
})

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userCartItems: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const product = mongoose.model("product", productSchema);
const user = mongoose.model("user", userSchema);

module.exports = {
    product,
    user
}