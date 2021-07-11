const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const story = require("./story.model");
const app = express();

//Processing the request  -  Middlewavers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose
  .connect(
    "mongodb+srv://admin:2345@cluster0.dn4sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("DB Connection failed");
  });

app.post("/api/submit-story", (req, res) => {
  // #1 Performing Operation
  console.log("story RestAPI called!");
  console.log(req.body);

  // Processing
  const story = new story({
    title: req.body.title,
    description: req.body.description,
    
    
  });

 story
    .save()
    .then(() => {
      res.send({
        message: "Success",
      });
    })
    .catch((ex) => {
      console.log(ex);
      res.send({
        message: "Failed",
      });
    });
});

app.listen(3000, () => {
  console.log("Backend Server Started...");
});