const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [
    {id: 1, name:'Noodeles', price:10.5},
    {id: 2, name:'Milk', price:20.5},
    {id: 3, name:'Egg', price:30.5},
    {id: 4, name:'Rice', price:12},
    {id: 5, name:'Banana', price:5}

];
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/products', (req, res) => {
   res.send(JSON.stringify(products));
});

app.get('/products/:id', (req, res) => {
     res.send('Hello Product: ' + JSON.stringify(products[parseInt(req.params.id) - 1]));
});

app.post('/products', (req, res) => {
   const product = {
       id: req.body.id,
       name: req.body.name,
       price: req.body.price
   }
   products.push(product);
   res.send(products);
});

app.delete('/products/:id', (req, res) => {
   const productId = parseInt(req.params.id);
   const product = products.find(pId => pId === productId - 1);
   res.send(JSON.stringify(product));
});

app.put('/products/:id', (req, res) => {
    res.send("Product Update: "+ req.params.id);
});
app.listen(3000);