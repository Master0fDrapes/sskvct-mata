import crypto from "crypto";

export const generateMemberId = () => {
  return "MEM" + crypto.randomBytes(5).toString("hex").toUpperCase();
};

export const findMemberByEmailOrPhone = async (pool, email, phone) => {
  const [rows] = await pool.execute(
    "SELECT * FROM members WHERE email = ? OR phone = ?",
    [email, phone]
  );
  return rows;
};

export const insertMember = async (pool, member) => {
  const sql = `
    INSERT INTO members 
    (member_id, member_type, name, email, phone, profile_picture, address)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  await pool.execute(sql, [
    member.member_id,
    member.member_type,
    member.name,
    member.email,
    member.phone,
    member.profile_picture || null,
    member.address,
  ]);
};

export const insertLog = async (pool, logData) => {
  const sql = `
    INSERT INTO member_logs (action, member_id, name, email, phone, ip_address, timestamp, data)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  await pool.execute(sql, [
    logData.action,
    logData.member_id,
    logData.name,
    logData.email,
    logData.phone,
    logData.ip_address,
    logData.timestamp,
    logData.data,
  ]);
};

export const findMemberByEmailAndPhone = async (pool, email, phone) => {
  const [rows] = await pool.execute(
    "SELECT * FROM members WHERE email = ? AND phone = ?",
    [email, phone]
  );
  return rows;
};

export const deleteMember = async (pool, member_id) => {
  await pool.execute("DELETE FROM members WHERE member_id = ?", [member_id]);
};
