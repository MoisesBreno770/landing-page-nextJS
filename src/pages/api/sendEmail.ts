// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SMTPClient } from 'emailjs';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { messageBody } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: "smtp.gmail.com",
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: "teste@gmail.com",
            to: "testando@gmail.com",
            subject: "Landingpage NextJS",
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({ message: 'Send Mail' })
}