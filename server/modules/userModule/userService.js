require('dotenv').config()
const userData = require('../../models/user')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("336148226089-812kkd4c9jfgullks4826scaej76gc15.apps.googleusercontent.com")
const Cart = require("../../models/cart")
const productData = require("../../models/product")
const Mongoose = require("mongoose")
const CouoponData = require("../../models/cupon")

const regiesterUser = async (req) => {
      console.log(req.body);
      const {email , password, firstName , lastName } = req.body;
    let query = {
            email : req.body.email
       }  
       const user = await userData.findOne(query)
       if(user) {
           console.log(user);
           return 1;
       } else {
            // const saveUser = new userData(req.body)
          const emailVerification = jwt.sign({email , password, firstName , lastName } , process.env.JWT)
          const output = `
                <p>You have a new contact request</p>
                <h3>Contact Details</h3>
                <ul>  
                    <li>Name: ${req.body.firstName}</li>
                    <li>Company: ${req.body.lastName}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Phone: ${req.body.password}</li>
                </ul>
                <h3>Click Heare to activate your Account</h3>
                <a href=http://localhost:3000/userVerify/${emailVerification}>click Link</a>
                <h3>Message</h3>
                <p>${req.body.message}</p>
                `;
            
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: '9328nion@gmail.com', // generated ethereal user
                    pass: "**nikul1**"  // generated ethereal password
                },
                tls:{
                    rejectUnauthorized:false
                }
                });
            
                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Nodemailer Contact" <9328217188nikul@gmail.com>', // sender address
                    to: req.body.email , // list of receivers
                    subject: 'Node Contact Request', // Subject line
                    text: 'Hello world?', // plain text body
                    html: output // html body
                };
            
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    console.log(error);
                    if (error) {
                        return error
                    }
                    console.log('Message sent: %s', info.messageId);   
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
                    return "Email is send"
                });  
        }
}

const nodeMailer = async (req) => {
    const userverifiedData = req.userVerified
    const saveUser = new userData(userverifiedData)
        return saveUser.save().then((result) => {                
            return result
        })
}

const login = async (req) => {
    const email = req.body.email
    const password = req.body.password
    const User = await userData.findOne({email})
    // console.log(User);
    
    if(User) {
        const comparePassword = await bcrypt.compare(password , User.password)
        console.log( comparePassword);
        if(comparePassword) {
            const token = await User.getToken();
            return  User 
        } else {
            return 1
        }
    } else {
        return 1
    }
}

const socialLogin = async (req) => {
    try {
       const { tokenId } = req.body
       const clientData = await client.verifyIdToken({  idToken : tokenId , audience : "336148226089-812kkd4c9jfgullks4826scaej76gc15.apps.googleusercontent.com"})
       if(clientData)  {      
          const { email_verified , family_name , email , given_name ,  name }   = clientData.payload
          console.log(email_verified , family_name , email , given_name ,  name);
          if(email_verified) {
               const findedData = await userData.findOne({email})     
               if(findedData) {
                    console.log("from() frind ")
                       await findedData.getToken()
                        return findedData
                } else {
                    const newUser = {
                        firstName : given_name,
                        lastName : family_name ,  
                        email : email ,
                        password : name + process.env.JWT,
                    }
                    const user = new userData(newUser)
                    user.getToken()
                    await user.save()
                    return user
                }
           } else {
                return 1
           }
       }
    } catch(e) {
        console.log(e);
    }
}

const updateUser = async (req) => {
    try {
        console.log("FROM SERVICES uPDATE");
        console.log(req.body);
        const updates = Object.keys(req.body)
        console.log(updates);
        const allowUpdates = ["firstName","lastName"]
        const isallowUpdate = updates.every((update) => allowUpdates.includes(update)) 
        if(!isallowUpdate) {
            console.log('from validation');
            return 1
        }
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        return req.user
    } catch(e) {
        console.log(e);
        return 1
    }  
}

const getUser = async (req) => {
    try {
        const user = req.user
        if(!user) {
            return 1
        }
        return user
    } catch(error) {
        console.log(error);
        return 1
    }
}

// const addToCart = async (req) => {
//     try {
//         const user = req.user._id
//         console.log(user , req.body._id);
//         const cartExistByUser = await Cart.findOne ({ orderBy : req.user._id })
//         const addNewCart = {}
//         if(cartExistByUser) {
//             console.log("in ifffffffffffffffffffffff");
//             const id = cartExistByUser._id
//              const alreadyAdded = await Cart.findOne({"products.product" : req.body._id})
//              if(alreadyAdded) {
//                  return 1
//              }
//              const addNewProduct = await Cart.updateOne({_id : id} , 
//                 {
//                     $push : {products : { product : Mongoose.Types.ObjectId(req.body._id)}}
//                 },
//                 {new : true}
//             )
//             console.log(addNewProduct)
              
//         } else {
//                 addNewCart.orderBy = user
//                 addNewCart.products = [{
//                     product : Mongoose.Types.ObjectId(req.body._id)
//                 }]
//                 await new Cart(addNewCart).save()
//         }
//         const allCartProduct = await Cart.findOne({orderBy : "61b324ce09b82a69dcf20faa"}).populate("products.product").select("products -_id")
//       //  console.log(allCartProduct[0].products);
//         let totalPrice = 0 ;
//         allCartProduct.products.map((item , i) => {
//              console.log(item.count);
//              totalPrice = totalPrice + item.product.price * item.count
//         })
//         const addedToCart = await Cart.findOneAndUpdate({orderBy : user},{cartTotal : totalPrice},{new : true}) 
//         return addedToCart 
//     } catch(e) {
//         console.log(e);
//         return 1
//     }
// }

const addToCart = async (req) => {
    try {
        const cart = await Cart.findOne({ orderBy : req.user._id})
        if(cart) {
            req.body.cart.map( async (result) => {
                const findedCart = await Cart.findOne({products : { $elemMatch : { product : result._id}}})
                if(findedCart) { 
                    console.log("already added");
                } else {
                    await Cart.updateOne({_id : cart._id},
                        {
                            $push : {products : { product : Mongoose.Types.ObjectId(result._id) , count : parseInt(result.count)}}
                        },
                        {new : true}
                    ).exec()
                }
            })
        } else {
            let products = [];
            req.body.cart.map( async (data) => {
                products.push({ product : data._id , count : parseInt(data.count)})
            })
            let addNewCart = {};
            console.log(req.user._id);
            addNewCart.orderBy = req.user._id;
            addNewCart.products = products
            await new Cart(addNewCart).save()
        }
        const userCart = await Cart.find({ orderBy : req.user._id }).exec()
        return userCart  
    } catch(e) {
        console.log(e);
        return 1
    }
}

const getAddToCart = async (req) => {
    try {
        // console.log(data.products);
        const data = await Cart.findOne({orderBy : req.user._id}).populate("products.product") //.select("products.product products.count -_id")
        let cartTotal = 0;
        for(let i = 0 ; i < data.products.length ; i++ ) {
            cartTotal += data.products[i].product.price * data.products[i].count
        }
        await Cart.updateOne({orderBy : req.user._id},{ cartTotal : cartTotal , totalAfterDiscount : 0 },{new : true})
        const allData = await Cart.find({orderBy : req.user._id}).populate("products.product").select("products.product products.count cartTotal -_id")
        console.log(allData);
        return allData
    } catch (e) {
        console.log(e);
        return 1
    }
}

const updateCart = async (req) => {
    try {
        const count = req.body.count
        const updated = await Cart.updateOne({ orderBy : req.user._id , "products.product" : req.params.productId },
            {
                $set : {"products.$.count" : parseInt(count) }
            },
        {new : true}).exec()
        return updated 
    } catch (e) {
        console.log(e);
        return 1
    }
} 
const deleteAddToCart = async (req) => {
    try {
        const productId = req.params.productId
        console.log(productId);
        if(!productId) {
            console.log("from no ta avalaible ProductId");
            return 1
        }
        const deletedProduct = await Cart.updateOne({orderBy : req.user._id},{
            $pull : { "products" : { "product" : Mongoose.Types.ObjectId(productId)} }
        },{ new : true }).exec()
        const resultData = await Cart.find({orderBy : req.user._id}).populate("products.product").select("products.product products.count -_id")
        return resultData
    } catch(e) {
        console.log(e);
        return 1
    }
}

const addAddress = async (req) => {
    try {
        if(!req.body.address) {
            return 1
        }
        const address = await userData.updateOne({_id : req.user._id },{address : req.body.address},{new : true})
        console.log(address);
        return address
    }catch(e) {
        console.log(e);
        return 1
    } 
} 

const applyCoupon = async (req) => {
    try {
        const {coupon} = req.body
        console.log(coupon);
        const validCoupon = await CouoponData.findOne({name : coupon})
        console.log(validCoupon);
        if(!validCoupon) {
            return 1
        }
        const { products , cartTotal } = await Cart.findOne({orderBy : req.user._id}).exec()
        if(cartTotal) {
            console.log(cartTotal);
            const today = new Date()
            const someDay = validCoupon.date
            if(someDay < today) {
                return 1
            }
            console.log(validCoupon.discount);
            const totalAfterDiscount = cartTotal - (cartTotal * validCoupon.discount / 100)
            console.log(totalAfterDiscount);
            await Cart.findOneAndUpdate({orderBy : req.user._id}
                                        ,{totalAfterDiscount : totalAfterDiscount} 
                                        ,{new : true }).exec()
            const updatedCart = await Cart.findOne({orderBy : req.user._id}).exec()
            return updatedCart
        }
        return 1
    } catch(e) {
        console.log(e);
        return 1
    }
}

module.exports = {
    regiesterUser,
    nodeMailer,
    login,
    socialLogin,
    updateUser,
    getUser ,
    addToCart , 
    getAddToCart,
    updateCart,
    deleteAddToCart,
    addAddress,
    applyCoupon
}