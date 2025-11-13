import { pool } from "../config/db.js"; // adjust path if needed

const cleanupUnverifiedAccounts = async () => {
  try {
    // Delete only accounts that are not verified
    const [result] = await pool.query("DELETE FROM users WHERE is_verified = 0");
    console.log(`✅ Deleted ${result.affectedRows} unverified user(s)`);

    // Optional: reset auto-increment if table is empty
    const [count] = await pool.query("SELECT COUNT(*) as total FROM users");
    if (count[0].total === 0) {
      await pool.query("ALTER TABLE users AUTO_INCREMENT = 1");
      console.log("🔄 Auto-increment reset to 1");
    }

    console.log("✅ Cleanup complete! Database is ready for testing.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error during cleanup:", err);
    process.exit(1);
  }
};

cleanupUnverifiedAccounts();
