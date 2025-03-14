import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function ValidateInputs(req, res, next) {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400)
        }
    
        const userVerified = await prisma.user.findUnique({ where: { email } });
        if (!userVerified) {
            console.log("Nao encontrado")
          return res.status(401).json({ message: "Usuário não encontrado" });
        }
    
        const isPasswordValid = await bcrypt.compare(password, userVerified.password);
    
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Senha incorreta" });
        }
        next()
    } catch (erro){
        console.error(erro)
        return res.status(500)
    }
    
}

export default ValidateInputs