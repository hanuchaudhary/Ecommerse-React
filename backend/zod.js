const zod = require("zod");

const productValidation = zod.object({
    name: zod.string().min(1),
    category: zod.string().min(1),
    description: zod.string().min(1),
    color: zod.string().min(1),
    size: zod.string().min(1),
    image: zod.string(),
    price: zod.number(),
    date: zod.date().default(() => new Date()),
    isAvailable: zod.boolean().default(true)
})

const userValidation = zod.object({
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(6),
    // userCartItems: zod.object(),
    date: zod.date().default(() => new Date()),
})

const signinValidation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
})

module.exports = {
    productValidation,
    userValidation,
    signinValidation
}