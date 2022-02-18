mongoose
  .connect(process.env.DB_ADDRESS)
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
