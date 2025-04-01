import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  static async getUser(req, res) {
    try {
      const user = await prisma.user.findUnique({
        omit: {
          password: true,
        },

        where: {
          email: req.params.email,
        },
      });

      res.status(200).json(user);
    } catch (error) {
      res.send(500);
      console.error(error);
    }
  }

  static async Login(req, res) {
    res.json({dados: req.user})
  }
  
  static async postUser(req, res) {
    const { name, email, age, password } = req.body;

    await prisma.user.create({
      data: {
        name: name,
        email: email,
        age: Number(age),
        password: password,
      },
    });
  }

  static async UserAutentic(req, res) {
    try {
      res.status(200).json({ Acesso: "Autenticado", user: req.user });
    } catch (erro) {
      console.error(erro);
    }
  }
}




export default User;
