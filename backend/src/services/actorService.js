import database from '../repository/connection.js';

async function findActor(){
    const sql = "SELECT * FROM tbl_ator";

    const conn = await database.connect();
    const [rows] = await conn.query(sql)
    conn.end()
    return rows;
}

export default {findActor};