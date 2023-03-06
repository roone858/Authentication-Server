import { Client } from "../../database.js";

export class adminMethods {
  async showAll() {
    const sql = `SELECT * FROM admin ;`;
    const conn = await Client.connect();
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  }
  async show(username) {
    const sql = `SELECT * FROM admin where username ='${username}' ;`;
    const conn = await Client.connect();
    const result = await conn.query(sql);
    conn.release();
    return result.rows[0];
  }
  async insert(user = {}) {
    try {
      const sql = `INSERT INTO admin (username,email,password)
                 Values ('${user.username}', '${user.email}','${user.password}') RETURNING * ;`;
      const conn = await Client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (err) {
      return err.message;
    }
  }
}
