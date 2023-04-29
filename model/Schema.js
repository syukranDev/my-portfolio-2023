import {Schema, model, models} from "mongoose";


const contactSchema = new Schema({
    email: String,
    message: String
})

const Contacts = models.portfolioContact ||  model('portfolioContact', contactSchema)  //if user collection already exist then use it else create new one using model('user', userSchema)

export default Contacts