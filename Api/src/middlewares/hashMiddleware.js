import bcrypt from "bcrypt";

async function ValidaDados(req, res, next) {
  const {password, email} = req.body;
  const saltRounds = 14;

  if (!password || !email) {
    return res.status(400).json({ message: "Preencha os dados corretamente!" });
  }

  try {
    req.body.password = await bcrypt.hash(password, saltRounds);
    next();
  } catch (error) {
    console.error("Erro ao hashear senha:", error);
    return res.status(500).json({ message: "Erro interno ao processar senha" });
  }
}

export default ValidaDados;
