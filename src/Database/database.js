const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CHAR}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

client.connect(() => {
  console.log("Successfully Connected");
});

const db = client.db("bis2bis");
const argentina = db.collection("argentina");
const brasil = db.collection("brasil");
const chile = db.collection("chile");
const colombia = db.collection("colombia");
const paraguai = db.collection("paraguai");
const peru = db.collection("peru");
const suriname = db.collection("suriname");
const uruguay = db.collection("uruguay");

module.exports = {
  argentina,
  brasil,
  chile,
  colombia,
  paraguai,
  peru,
  suriname,
  uruguay,
  ObjectId,
};
