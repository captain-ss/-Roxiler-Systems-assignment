const mongoose = require("mongoose");

const DB_URI="mongodb+srv://swadeshishu2001:ishu2001@cluster0.sgxb5nf.mongodb.net/roxiler_assis?retryWrites=true&w=majority&appName=Cluster0"

// const DB_URI="mongodb+srv://Test_Connection:Manoj2000@cluster0.uf11sxk.mongodb.net/Texly_Private_Limited?retryWrites=true&w=majority"
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/******************************** Events of mongoose connection. ******************************************************/

mongoose.connection.on("connected", () => {
  console.log("Mongoose default connection open to " + DB_URI);
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection is disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
