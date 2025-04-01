import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

async function gerarToken(req, res, next) {
  try {

    const userVerified = await prisma.user.findUnique({
      where:{
        email: req.body.email
      }
    })

    const token = jwt.sign(
      { email: userVerified.email, id: userVerified.id },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true, secure: true });
    
    next()

    return res.status(200).json({
      message: "Token criado!",
      token,
    });

  } catch (error) {
    console.error("Erro ao gerar token:", error);
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}

export default gerarToken;
