const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const  cors = require('cors')
const app = express()
const  cors = require('cors');
const app = express();
const port = 3030;

app.use(cors())
app.use(cors());
app.use(require('body-parser').urlencoded({ extended: false }));

const reviews_data = JSON.parse(fs.readFileSync("reviews.json", 'utf8'));
@@ -21,10 +21,10 @@ const Dealerships = require('./dealership');

try {
  Reviews.deleteMany({}).then(()=>{
    Reviews.insertMany(reviews_data['reviews']);
    Reviews.insertMany(reviews_data.reviews);
  });
  Dealerships.deleteMany({}).then(()=>{
    Dealerships.insertMany(dealerships_data['dealerships']);
    Dealerships.insertMany(dealerships_data.dealerships);
  });

} catch (error) {
@@ -34,7 +34,7 @@ try {

// Express route to home
app.get('/', async (req, res) => {
    res.send("Welcome to the Mongoose API")
    res.send("Welcome to the Mongoose API");
});

// Express route to fetch all reviews
@@ -93,19 +93,19 @@ app.get('/fetchDealer/:id', async (req, res) => {
//Express route to insert review
app.post('/insert_review', express.raw({ type: '*/*' }), async (req, res) => {
  data = JSON.parse(req.body);
  const documents = await Reviews.find().sort( { id: -1 } )
  let new_id = documents[0]['id']+1
  const documents = await Reviews.find().sort( { id: -1 } );
  let new_id = documents[0].id+1;

  const review = new Reviews({
		"id": new_id,
		"name": data['name'],
		"dealership": data['dealership'],
		"review": data['review'],
		"purchase": data['purchase'],
		"purchase_date": data['purchase_date'],
		"car_make": data['car_make'],
		"car_model": data['car_model'],
		"car_year": data['car_year'],
		"name": data.name,
		"dealership": data.dealership,
		"review": data.review,
		"purchase": data.purchase,
		"purchase_date": data.purchase_date,
		"car_make": data.car_make,
		"car_model": data.car_model,
		"car_year": data.car_year,
	});

  try {
