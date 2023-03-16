import database from '../../backend/repository/connection.js';

export async function login(email, password) {
  const sql = "SELECT * FROM tbl_Usuario WHERE email= ? AND senha= ?;"
  const dataLogin = [email, password]

  const conn = await database.connect();
  const [rows] = await conn.query(sql, dataLogin);
  conn.end()
  console.log(rows)
  return rows
}

export default {login}