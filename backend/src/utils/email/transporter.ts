 
import * as nodemailer from 'nodemailer'
const env = require('../../config/environments')
const transporter = nodemailer.createTransport({
    host: env.EMAIL.HOST,
    port: env.EMAIL.PORT,
    secure: env.EMAIL.SECURE,
    auth: {
        user: env.EMAIL.USER,
        pass: env.EMAIL.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

export default transporter