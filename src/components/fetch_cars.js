import { insertCar } from './insert_car'

const fetchCars = () => {
  
  // To get all cars
  const url = "https://wagon-garage-api.herokuapp.com/480/cars";

  // 1. Send an AJAX request to the API to fetch all cars
  fetch(url)
    .then(response => response.json())
    .then((cars) => {
      // 2. For each car
      cars.forEach((car) => {
        //    3. Insert a new row in the cars table
        insertCar(car)
      });
      
    })
}

export { fetchCars }
