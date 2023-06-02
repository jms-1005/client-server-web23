import express from "express";
import mysql from 'mysql';
import cors from 'cors';

// Arrow functions
/* 

    function abc(param){
        return param + "something" ;
    }

    const abc = (param) => {
        return param + " something";
    }

*/

const server = express();
server.use(express.json());
server.use(cors());
const port = 4500;

const db = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce'

});

db.connect((error) => {
    if(error){
        console.log('Something went wrong.', error)
    }
    else{
        console.log('Successfully connected to MySQL DB');
    }
})

// server.listen(port, function(){
//     console.log('Node server started at port:', port)
// })

//Arrow function method
server.listen(port, () => {
    console.log('Node server started at port:', port);
})

//Product APIs

//GET APIs
server.get('/products', (req, res) => {
    //run a stored proc in the connected db
    //receive the results
    //send the response as json

    let SQLQuery = "CALL `getProducts`()";
    db.query(SQLQuery, (error, data) => {
        (error)? res.json({ error_message: error }) : res.json({ productData: data[0] });
    })
})

server.get('/products/:productID', (req, res) => {
    let SQLQuery = "CALL `getProductByID`(?)";
    db.query(SQLQuery, [req.params.productID], (error, data) => {
        (error)? res.json({ error_message: error }) : res.json( data[0][0]);
    })
})

server.post('/validateuser', (req, res) => {
    let SQLQuery = "CALL `validateUser`(?, ?)";
    db.query(SQLQuery, [req.body.email, req.body.password], (error, data) => {
        if(error){
            res.json({ error_message: error});
        }
        else{
           if(data[0].length > 0){
            res.json(true);
           }
           else{
            res.json(false);
           }
        }
    })
})


//POST APIs
server.post('/products', (req, res) => {
    // let productName = req.body.productName;
    // let price = req.body.price;
    let SQLInsertQuery = "CALL `insertNewProduct`(?, ?)";
    db.query(SQLInsertQuery, [req.body.productName, req.body.price], (error, data) => {
        if(error){
            res.json({ message: false, error_message: error });
        }
        else{
            res.json({ message: true, data: data });
        }
    })
})

// UPDATE APIs
server.put('/products/:id', (req, res)=> {
    let SQLQuery = "CALL `updateProduct`(?, ?, ?)";
    db.query(SQLQuery, [ req.params.id, req.body.productName, req.body.price], (error, data)=>{
        (error)? res.json({ message: 'update failed'}) : res.json({ message: 'Update successful', data: data[0] });
    })
})

server.put('/setstatus/:id', (req, res) => {
    let SQLQuery = ' CALL `setLiveStatus`(?,?)';
    db.query(SQLQuery, [req.params.id, req.body.status], (error, data) => {
        if(error){
            res.json(error)
        }
        else{
            res.json(req.body.status);
        }
    })
})


//DELETE APIs
server.delete('/products/:id', (req, res) => {
    let SQLQuery = " CALL `deleteProduct`(?)";
    db.query(SQLQuery, [req.params.id], (error, data) => {
        if(error){
            res.json(error);
        }
        else{
            res.json(true);
        }
    })
})

// CALL `getProductByID`(@p0) 