const sequelize = new Sequelize("Prueba", "username", "password", {
  host: "localhost",
  dialect: "mssql",
});
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
