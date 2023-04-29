import connectMongo from "../../database/conn";
import Contacts from "../../model/Schema"
// import { hash } from "bcryptjs";

export default async function handler(req, res) {
    connectMongo().catch(e => res.json({ error: 'Connection database failed!'}))

    if(req.method === 'POST'){
        if(!req.body){
            return res.status(400).json({ error: 'Dont have form data!'})
        }

        const { email, message } = req.body

        // check if user exist
        const isEmailExist = await Contacts.findOne({ email })
        if(isEmailExist) return res.status(422).json({ message: 'Email already exists!'})

        // continue if user not exist and hash user's password
        Contacts.create({ 
            email, 
            message
        }).then(data => {
                res.status(201).json({status: true, user: data})
        }).catch(err => {
           return res.status(404).json({ err })
        })
            


    } else {
        res.status(500).json({ message: 'HTTP method invalid, only POST method allowed!'})
    }

}