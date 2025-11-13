import { pool } from "../config/db.js";

(async () => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    console.log("DB working:", rows);
    process.exit();
  } catch (err) {
    console.error("DB test failed:", err);
  }
})();
