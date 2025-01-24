const mysql = require('sequelize');
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  createdAt: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// const createTableQuery = `
//   CREATE TABLE IF NOT EXISTS USERS (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     password VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     createdAt TIMESTAMP
//   );
// `;
// connection.query(createTableQuery, (err, results) => {
//   if (err) {
//     console.error('Error executing query: ' + err.stack);
//   } else {
//     console.log('Query results:', results);
//   }
// });