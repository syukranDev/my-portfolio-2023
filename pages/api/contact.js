import connectMongo from "../../database/conn";
import Contacts from "../../model/Schema"
import nodemailer from 'nodemailer';

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
        }).then(async data => {
                res.status(201).json({status: true, user: data})

                // Send an emai notification to me
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: process.env.SMTP_FROM_EMAIL,
                      pass: process.env.SMTP_PASSWORD
                    }
                  });
                  
                  const mailOptions = {
                    from: process.env.SMTP_FROM_EMAIL,
                    to: process.env.SMTP_TO_EMAIL,
                    subject: 'New Message from syukranDev/contact',
                    text: 'Message: ' + data.message + ' From: ' + data.email
                  };
                  
                  await new Promise((resolve, reject) => {
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error)
                          reject(err)
                        } else {
                          console.log('Email sent: ' + info.response)
                          resolve(info.response)
                        }
                      });
                  })


        }).catch(err => {
           return res.status(404).json({ err })
        })

        
            


    } else {
        res.status(500).json({ message: 'HTTP method invalid, only POST method allowed!'})
    }

}