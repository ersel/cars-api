const express = require("express");

const app = express();
app.use(express.json());

const CAR_DATABASE = [
  {
    id: 1,
    make: "ford",
    color: "yellow",
    mileage: "19000",
  },
  {
    id: 2,
    make: "hyundai",
    color: "red",
    mileage: "29000",
  },
  {
    id: 3,
    make: "bmw",
    color: "silver",
    mileage: "39000",
  },
  {
    id: 4,
    make: "ford",
    color: "red",
    mileage: "19000",
  },
];

// degisiklik

// ADDRES:
// HTTP VERB + ROUTE
// FUNCTIONALITY
// callback function(req, res)
// request istek
// response yanit
app.get("/cars/:carId", function (request, response) {
  console.log("request params:", request.params);
  const carId = request.params.carId;
  const carToReturn = CAR_DATABASE.find((car) => {
    return car.id === Number(carId);
  });
  response.send(carToReturn);
});

app.get("/cars", function (request, response) {
  /*
        query
        params
    */

  let carsToReturn = CAR_DATABASE;
  if (request.query.make) {
    carsToReturn = carsToReturn.filter((car) => {
      return car.make === request.query.make;
    });
  }
  if (request.query.color) {
    carsToReturn = carsToReturn.filter((car) => {
      return car.color === request.query.color;
    });
  }
  // console.log("BODY: ", request.body);
  // console.log("PARAMS: ", request.params);
  response.send(carsToReturn);
});

app.post("/cars", function (request, response) {
  // request.body
  console.log("body", request.body);
  CAR_DATABASE.push(request.body);
  response.send("OK");
});

app.listen(3000); // HTTP trafigini dinle...
