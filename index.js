const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();

// schoolProject
// KNbGJRmHV5KMaphu

app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.phfld.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const teacherCollection = client.db('schoolManagement').collection('teacher');
        const studentCollection = client.db('schoolManagement').collection('student');
        const classCollection = client.db('schoolManagement').collection('class');

        app.get('/teacher', async(req, res)=>{
            const query = {};
            const result = await teacherCollection.find(query).toArray();
            res.send(result);
        });

        app.get('/teacher/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await teacherCollection.findOne(query);
            res.send(result);
        });

        app.get('/student', async(req, res)=>{
            const query = req.body;
            const result = await studentCollection.find(query).toArray();
            res.send(result);
        });

        app.get('/student/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await studentCollection.findOne(query);
            res.send(result);
        });

        app.get('/student/:class', async (req, res)=>{
            const query = {class: 'six'};
            const result = await studentCollection.findOne(query);
            res.send(result);
        });

        app.get('/class', async(req, res)=>{
            const result = await classCollection.find().toArray();
            res.send(result);
        });

        app.get('/myClass', async(req, res)=>{
            const room = req.query.class;
            // get all data 
            const students = await studentCollection.find().toArray();
            // according to date, get data 
            const query = {class:room}; 
            const bookings = await classCollection.find(query).toArray();

            students.forEach(service =>{
                const serviceBookings = bookings.filter(book => book.class === service.class);
                
                const available = bookings.filter(slot =>!bookedSlots.includes(slot));
                service.slots = available;
            });
            res.send(services);
            });


        

    }
    finally{

    }

}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send("server connected");
});

app.listen(port, ()=>{
    console.log('my server is ', port);
})