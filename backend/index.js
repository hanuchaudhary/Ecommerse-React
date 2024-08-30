const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
const { product, user } = require("./database");
const { productValidation, userValidation, signinValidation } = require("./zod");
const mongoose = require("mongoose");

const JWT_SECRET = "your_jwt_secret_key";
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());


//multer for image 
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("image");

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Images Only!");
    }
}

app.use("/uploads", express.static("uploads"));

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ message: err });
        } else {
            if (req.file == undefined) {
                res.status(400).json({ message: "No file selected" });
            } else {
                const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
                res.status(200).json({
                    message: "File uploaded successfully",
                    file: fileUrl,
                });
            }
        }
    });
});

app.post("/addproduct", async (req, res) => {
    const body = req.body;
    const parsedData = productValidation.safeParse(body);
    try {
        if (!parsedData.success) {
            res.status(400).json({
                msg: "Error: Invalid input, Zod validation failed!",
                errors: parsedData.error.errors,
            });
            return;
        }

        let productArr = await product.find({});
        let pId = 0;
        if (productArr.length > 0) {
            let lastProduct = productArr[productArr.length - 1];
            pId = lastProduct.id + 1;
        } else {
            pId = 1;
        }

        const newProduct = new product({
            id: pId,
            name: body.name,
            category: body.category,
            description: body.description,
            image: body.image,
            color: body.color,
            size: body.size,
            price: body.price,
        });

        await newProduct.save();

        res.status(201).json({
            msg: "Product added successfully",
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Failed to add product",
            error: error.message,
        });
    }
});

app.post("/removeproduct", async (req, res) => {
    try {
        await product.findOneAndDelete({ id: req.body.id });
        res.status(200).json({
            msg: "Product Deleted Successfully!!",
        });
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
});

app.get("/products", async (req, res) => {
    try {
        let products = await product.find({});
        res.status(200).json({
            msg: "All products fetched!!!",
            product: products,
        });
    } catch (error) {
        res.status(401).json({
            msg: "Error while fetching",
            err: error,
        });
    }
});

// User signup and signin routes --------------------------------------------------

app.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedUser = userValidation.safeParse(body);
    try {
        if (!parsedUser.success) {
            res.status(400).json({
                msg: "Error: Invalid input, Zod validation failed!",
                errors: parsedUser.error.errors,
            });
            return;
        }

        let checkExistUser = await user.findOne({ email: body.email });
        if (checkExistUser) {
            res.status(400).json({
                message: "User Already Exists!!!",
            });
            return;
        } else {
            let cart = {};
            for (let i = 0; i < 300; i++) {
                cart[i] = 0;
            }

            let addUser = new user({
                id: body.id,
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
                password: body.password,
                userCartItems: cart,
            });
            await addUser.save();

            // JWT

            const data = {
                addUser: {
                    id: addUser._id,
                },
            };

            const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({
                message: "User added successfully!!",
                token: token,
                user: addUser,
            });
        }
    } catch (error) {
        res.status(411).json({
            msg: "Failed to add product!!",
            error: error.message,
        });
    }
});

app.post("/signin", async (req, res) => {
    const body = req.body;
    const parsedUser = signinValidation.safeParse(body);
    try {
        if (!parsedUser.success) {
            res.status(400).json({
                message: "Error: Invalid input, Zod validation failed!",
                errors: parsedUser.error.errors,
            })
            return;
        }

        let checkExistUser = await user.findOne({ email: body.email });
        if (checkExistUser) {
            const passCompare = checkExistUser.password === body.password;
            if (passCompare) {
                const data = {
                    user: {
                        id: checkExistUser._id
                    }
                }
                const token = jwt.sign(data, JWT_SECRET);

                return res.status(201).json({
                    success: true,
                    token: token,
                });
            }else{
                res.status(400).json({
                    msg : "Wrong PAssword!!"
                })
            }
        } else {
            res.status(400).json({
                success: false,
                message: "Wrong Email!!!"
            })
        }
    } catch (error) {
        res.status(401).json({
            message: "login failed!!!",
            error: error.message
        })
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
