const db = require('../index');

module.exports = {
  getAddress: async userId => {
    const { rows } = await db.query(
      `
    SELECT
      name,
      street,
      apt,
      city,
      state,
      zip
    FROM users
    WHERE
      firebase_id = $1
    `,
      [userId]
    );

    return rows[0];
  },
  updateAddress: async (userId, address) => {
    await db.query(
      `
    UPDATE users
    SET
      name = $1,
      street = $2,
      apt = $3,
      city = $4,
      state = $5,
      zip= $6
    WHERE
      firebase_id = $7
    `,
      [
        address.name,
        address.street,
        address.apt,
        address.city,
        address.state,
        address.zip,
        userId,
      ]
    );
  },
  createAddress: async (userId, address) => {
    await db.query(
      `
    INSERT INTO users (firebase_id, name, street, apt, city, state, zip)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        userId,
        address.name,
        address.street,
        address.apt,
        address.city,
        address.state,
        address.zip,
      ]
    );
  },
};
