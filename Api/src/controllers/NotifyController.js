import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class notify {
    static async AddNotify(req, res){
       console.log(req.body)
    }
}

export default notify