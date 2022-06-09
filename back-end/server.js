function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i]["name"] < pivot["name"] ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
};

async function retrieveDocuments(client){
  const cursor =  client.db("PropertyProductDB").collection("Properties").find({});
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
  const uri = "mongodb://mongo:27017/PropertyProductDB";
  const client = new MongoClient(uri,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  app.use(cors());
  app.use(express.json());
  app.listen(port, () => {
      console.log('Server running on port: ' + port);
  });


  try {
    await client.connect();
    const products = quicksort(await retrieveDocuments(client));
    const returnItems = [];
    returnItems[1] = products.length;
    let value = 0;
    for(let i=0; i<products.length; i++){
      value += parseInt(products[i].Value);
    }


    returnItems[0] = value;
    counter = 0;
    for(let i=0; i<products.length; i++){
      if(products[i]["Pet-friendly"] == true){
        counter += 1;
      }
    }
    
    returnItems[2] = counter;

    app.get('/', (req, res) => {
      res.send(returnItems);
    })

    app.get('/properties', (req, res) => {
      res.send(products);
    })

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);