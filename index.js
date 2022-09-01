const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;

// storing that connection and reuse it so we don't have to connect to the database on every request
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // connect to the database
  const client = await MongoClient.connect(MONGODB_URI);

  // specify which database we want to use
  const db = await client.db("mailmeprod");

  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {
  /* By default, the callback waits until the runtime event loop is empty before freezing the process 
  and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze 
  the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will 
  freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop 
  are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
  context.callbackWaitsForEmptyEventLoop = false;

  // get an instance of the db
  const db = await connectToDatabase();

  // make a query
  // const themes = await db
  //   .collection("competidailies")
  //   .find({})
  //   .limit(20)
  //   .toArray();

  const randomTheme = await db
    .collection("competidailies")
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();

  const response = {
    statusCode: 200,
    body: JSON.stringify(randomTheme),
  };

  return response;
};
