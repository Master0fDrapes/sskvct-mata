// models/memberModel.js
import { getPool } from '../utils/db.js'; // ✅ correct import

export const createMember = async (data) => {
  const pool = getPool();
  const sql = `
    INSERT INTO members 
      (member_id, member_type, name, email, phone, profile_picture, address)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [
    data.member_id,
    data.member_type,
    data.name,
    data.email,
    data.phone,
    data.profile_picture,
    data.address,
  ]);
  return result;
};

export const deleteMember = async (email, phone) => {
  const pool = getPool();
  const sql = `DELETE FROM members WHERE email = ? AND phone = ?`;
  const [result] = await pool.execute(sql, [email, phone]);
  return result;
};

export const createMemberLog = async (action, memberData, ip) => {
  const pool = getPool();
  const sql = `
    INSERT INTO member_logs (action, member_id, name, email, phone, ip_address, data)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [
    action,
    memberData.member_id || null,
    memberData.name || null,
    memberData.email || null,
    memberData.phone || null,
    ip,
    JSON.stringify(memberData),
  ]);
  return result;
};
