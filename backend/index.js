var tech = require("express");
var mongoose = require("mongoose");
const User = require("./model");
const ContactUser = require("./model1");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = tech();

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
app.use(cors());

app.use(bodyParser.json());
mongoose.connect(
  "mongodb://127.0.0.1:27017/Exercise-App",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log("not connected");
    } else {
      console.log("Data base connected");
    }
  }
);

app.post("/", (req, res) => {
  let user = User(req.body);
  user
    .save()
    .then((el) => {
      res.send(el);
    })
    .catch((err) => {
      console.log("error Occured while posting data");
    });
});

app.get("/", (req, res) => {
  User.find()
    .then((el) => {
      res.send(el);
    })
    .catch((err) => {
      console.log("error occuried while getting data");
    });
});
// update Data of object
app.put("/:id", (req, res) => {
  let id = req.params.id;
  User.updateOne({ _id: id }, { $set: req.body }, (err) => {
    if (err) {
      console.log("error occured while updating data");
    } else {
      res.send(console.log("updated successfully"));
    }
  });
});
// add data in object

// Deleting from api
app.delete("/:id", (req, res) => {
  let id = req.params.id;
  User.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log("error");
    } else {
      res.send(console.log("deleted successfully"));
    }
  });
});

app.listen(4000, () => {
  console.log("PORT is Connected SuccessFully");
});
