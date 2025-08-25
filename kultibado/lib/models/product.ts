import {Schema, model, models} from 'mongoose';

const ProductSchema = new Schema(
    {
        product_id: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        quantity: {
            type: Int32Array,
            required: true,
            unique: true
        },
        price: {
            type: Int32Array,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
    
);

const Product = models.Product || model("Buyer", ProductSchema);
export default Product;