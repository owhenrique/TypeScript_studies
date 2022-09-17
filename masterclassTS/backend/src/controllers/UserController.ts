import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {name: 'Paulo', email: 'me.pauloalmeida@gmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req : Request, res: Response) {
        const emailservice = new EmailService();
        
        emailservice.sendMail({
            to: { 
                name: 'Paulo Henrique', 
                email: 'me.pauloalmeida@gmail.com' 
            },
            message: { 
                subject: 'Bem vindo ao sistema!', 
                body: 'Seja bem vindo.' 
            }
        });

        return res.send();
    }
}