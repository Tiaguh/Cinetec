import jwt from 'jsonwebtoken'

function verifyToken(req, res) {
  const myKey = "EssaéaChaveDeCriptogr@fi@!";

  const authHeader = req.headears.authorization;
  if (!authHeader > 0) {
    return res.status(401).send({ message: "Token não enviado" })
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2) {
    return res.status(401).send({ message: "Token no formato inválido" })
  }

  const [format, token] = parts;
  if (format !== "Bearer") {
    return res.status(401).send({ message: "Token não contém 'Bearer'. " })
  }

  jwt.verify(token, myKey, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "Sessão encerrada, usuário não logad!" })
    }

    return next();
  })
}

export default verifyToken;