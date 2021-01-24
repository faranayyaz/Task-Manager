const mongoose = require("mongoose");
// mongoose.set("debug", true);

run()
  .then(() => console.log("Connected with MongoDB"))
  .catch((error) => console.error(error.stack));

async function run() {
  console.log(mongoose.version);

  const start = Date.now();
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  await mongoose.connect(process.env.MONGODB_URL_KEY, opts).catch((error) => {
    console.log(
      `Caught MongoDB "${error.message}" after ${Date.now() - start}`
    );
    throw error;
  });
}
