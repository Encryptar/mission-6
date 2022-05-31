function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i]["product-name"] < pivot["product-name"] ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
};



async function retrieveDocuments(client){
  const cursor = client.db("PropertyManagerDB").collection("PropertyProductCollection").find({});
  const results = await cursor.toArray();
  return results;
};

async function main() {
  const express = require('express');
  const cors = require('cors');
  const {MongoClient} = require('mongodb');
  require('dotenv').config();

  const app = express();
  const port = process.env.PORT || 9000;
  const uri = "mongodb+srv://Hayden:Glad3rp2@propertymanagementdb.fxrav.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  app.use(cors());
  app.use(express.json());
  app.listen(port, () => {
      console.log('Server running on port: ' + port);
  });


  try {
    await client.connect();
    const products = await retrieveDocuments(client);
    console.log(quicksort(products));
    

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

  
}
main().catch(console.error);