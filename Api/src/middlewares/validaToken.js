import jwt from "jsonwebtoken";

async function ValidaToken(req, res, next) {
  try {
    const cookies = req.headers.cookie;
    const token = cookies
      ?.split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

     console.log(req.headers)
    if (!token) {
      return res.status(401).json({ message: "Token não encontrado" });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded

    next();
  } catch (error) {
    console.error("Erro na validação do token:", error.message);
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

export default ValidaToken;