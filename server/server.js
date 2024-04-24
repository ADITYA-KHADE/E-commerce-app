const express = require('express');
const app = express();
const cors = require('cors');
const jwt =require('jsonwebtoken');
const path = require('path');
const multer = require('multer');
const connectdb = require('./connection/dbconnect');
const Product = require('./model/dbmodel.js');
const User = require('./model/usermodel.js');
// const { ObjectId } = require('mongodb');
connectdb();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//middleware for fetching user
const fetchuser=async (req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).json({success:0, message:'Access Denied'});
    }else{
        try{
            const verified=jwt.verify(token,process.env.JWT_SECRET);
            req.user=verified.user;
            next();
        }catch(err){
            res.status(400).json({success:0, message:'Invalid Token'});
        }
    }
    
}

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: function(req, file, cb){
        cb(null, `${file.fieldname}_${Date.now() + path.extname(file.originalname)}`);
    }
});

const upload = multer({storage: storage});

app.use('/images',express.static('upload/images'));
app.get('/', (req, res) => {
    res.send('Hello World! ,IIIt ranchi')
})

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({ 
        success:1,
        image_url:`images/${req.file.filename}`,
        message: 'Image uploaded successfully'});
});


app.post('/addproduct',async (req,res)=>{
    const {name, image, category, new_price, old_price} = req.body;
    let products=await Product.findOne({}).sort({ id: -1 });
    let id;
    if(products){
        // let last_product_array=products.slice(-1);
        // let last_product=last_product_array[0];
        id=products.id+1;
    }else{
        id=1;
    }
    try{
        const product = new Product({
            name,
            id:id,
            image,
            category,
            new_price,
            old_price,
            available:"true",
        });
        console.log(product);
        await product.save();
        res.json({success:1, message:'Product added successfully'});
    }catch(err){
        res.json({success:0, message:err.message});
    }
});

app.post('/removeproduct', async (req, res) => {
    // await Product.findByIdAndDelete({id:req.body.id});
    await Product.deleteOne({id:req.body.id});

    res.json({
        success:1, 
        message:'Product removed successfully',
        name:req.body.name,
    });
});


app.get('/allproducts', async (req, res) => {
    try{
        const products = await Product.find();
        // res.json({success:1, products});
        res.send(products);
    }catch(err){
        res.json({success:0, message:err.message});
    }
});

app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body;
    try{
        let user_Exist = await User.findOne({email});
        if(user_Exist){
            return res.json({success:0, message:'User already exists'});
        }
        let cart={};
        for(let i=0;i<300;i++){
            cart[i]=0;
        }
        const user = new User({
            name,
            email,
            password,
            cartdata:cart,
        });
        await user.save();
        const data={
            user:{
                id:user.id
            }
        } 

        const token=jwt.sign(data,process.env.JWT_SECRET);
        const bypass=user.$oid;
        res.json({success:1, message:'User registered successfully',token,bypass});
    }catch(err){
        res.json({success:0, message:err.message});
    }
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try{
        let user_exist = await User.findOne({email});
        if(!user_exist){
            return res.status(404).json({success:0, message:'User not found'});
        }
        if(user_exist.password!==password){
            return res.status(404).json({success:0, message:'Invalid credentials'});
        }
        const data={
            user:{
                id:user_exist.id
            }
        } 
        const token= jwt.sign(data,process.env.JWT_SECRET);
        res.json({success:1, message:'User logged in successfully',token});
    }catch(err){
        res.json({success:0, message:err.message});
    }        
        
});

app.get('/newcollection', async (req,res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("newcollecction fetched");
    res.send(newcollection); 
})

app.get('/popular', async (req,res)=>{
    let products=await Product.find({category:"women"});
    let popular=products.slice(0,4);
    console.log("popular fetched");
    res.send(popular); 
})


app.post('/addtocart',fetchuser, async (req,res)=>{
    // console.log(req.body);
    const user = await User.findOne({ _id: (req.user.id) });
    user.cartdata[req.body.id]+=1;
    // await user.findOneAndUpdate({_id:req.user.id},{cartdata:user.cartdata});
    await User.findOneAndUpdate( { _id: req.user.id },{ cartdata: user.cartdata }, { new: true }  );
    res.send("Done");
});

app.post('/removefromcart',fetchuser, async (req,res)=>{

    const user = await User.findOne({ _id: (req.user.id) });
    if(user.cartdata[req.body.id]>0){
        user.cartdata[req.body.id]-=1;
    }
    await User.findOneAndUpdate( { _id: req.user.id },{ cartdata: user.cartdata }, { new: true }  );
    res.send("Done");

});

//creating endpoint for fetching cart data
app.get('/getcart',fetchuser, async (req,res)=>{
    const user=await User.findOne({ _id: (req.user.id) });
    res.send(user.cartdata);
});

app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})