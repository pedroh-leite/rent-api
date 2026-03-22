export let createUserQuery = `INSERT INTO users(guid, name, lastname, birth_date, email, cellphone) VALUES(UUID(), ?, ?, ?, ?, ?)`;

export let getUserQuery = `SELECT * FROM users WHERE guid = ?`;

export let getUserByEmailQuery = `SELECT * FROM users WHERE email = ?`;

export let deleteUserQuery = `DELETE FROM users WHERE guid = ?`;

export let updateUserQuery = `UPDATE users SET ? WHERE guid = ?`;
