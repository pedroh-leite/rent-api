export let createPropertyQuery = `INSERT INTO properties(guid, owner_guid, address, number, complement, neighborhood, city, country, cep, number_of_rooms )VALUES (UUID(), (SELECT guid FROM users u WHERE u.email = ?), ?, ?, ?, ?, ?, ?, ?, ?)
`

export let getPropertyQuery = `SELECT CONCAT(u.name, ' ', u.lastname) as 'owner_name', p.* FROM properties p JOIN users u ON p.owner_guid = u.guid WHERE p.guid = ?`;

export let deletePropertyQuery = `DELETE FROM properties WHERE guid = ?`;

export let updatePropertyQuery = `UPDATE properties SET ? WHERE guid = ?`
