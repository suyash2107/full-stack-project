import { Schema, model } from "mongoose";
 
const orderShema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: 'Product',
    },
    user:{
        type:  Schema.Types.ObjectId,
        ref: "User",
    },
    quantity:{
        type: Number,
        default: 1,
    },
    shippingAddress: {
        type: String,
        required : true,
    }

});

const Order = model('Order', orderShema);

export default Order;