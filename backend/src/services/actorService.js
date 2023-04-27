import database from '../repository/connection.js';

async function findActor() {
    const sql = "SELECT * FROM tbl_ator";

    const conn = await database.connect();
    const [rows] = await conn.query(sql)
    conn.end()
    return rows;
}

async function updateActor(nameActor, gender, birthDay, idActor) {
    const sql = "UPDATE tbl_ator SET nome_ator = ?, sexo = ?, dt_nascimento = ? WHERE idActor = ? "
    const dataActor = [nameActor, gender, birthDay, idActor]

    const conn = await database.connect()
    conn.query(sql, dataActor);
    conn.end()
}

export default { findActor, updateActor };