import database from '../repository/connection.js';

async function createUser(name, email, password, typeUser) {
  const sql = "INSERT INTO tbl_usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)"
  const dados = [name, email, password, typeUser];

  const conn = await database.connect();
  conn.query(sql, dados);
  conn.end();
}

async function updateProfile(name, email, password, typeUser, idUser) {
  const sql = "UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ?"
  const dataProfile = [name, email, password, typeUser, idUser];

  const conn = await database.connect();
  conn.query(sql, dataProfile);
  conn.end();
}

export default { createUser, updateProfile };