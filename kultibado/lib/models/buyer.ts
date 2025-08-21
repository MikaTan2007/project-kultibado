import {Schema, model, models} from 'mongoose';

const BuyerSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        company_name: {
            type: String,
            required: false
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        orders: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
    
);

const Buyer = models.Buyer || model("Buyer", BuyerSchema);
export default Buyer;