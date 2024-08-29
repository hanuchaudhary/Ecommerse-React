const zod =  require("zod");

const productValidation = zod.object({
    // id: zod.number().nonnegative(),
    name: zod.string().min(1),
    category: zod.string().min(1),
    color: zod.string().min(1),
    size: zod.string().min(1),
    image: zod.string(),
    price:  zod.number().positive(),
    date: zod.date().default(() => new Date()),
    isAvailable: zod.boolean().default(true)
})

module.exports ={
    productValidation
}