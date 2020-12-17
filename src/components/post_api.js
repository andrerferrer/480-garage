import { insertCar } from './insert_car';

const postAPI = () => {
  // 3. Retrieve data entered by the user in the inputs
  const brand = document.querySelector('#brand').value;
  const model = document.querySelector('#model').value;
  const plate = document.querySelector('#plate').value;
  const owner = document.querySelector('#owner').value;

  const url = 'https://wagon-garage-api.herokuapp.com/480/cars';

  let dataAsBody = {
    "brand": brand,
    "model": model,
    "owner": owner,
    "plate": plate
  };

  dataAsBody = JSON.stringify(dataAsBody);

  // 4. Send a POST ajax request to the API
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: dataAsBody
  })
    .then(res => res.json())
    .then((car) => {
      // 5. insert the new car into the DOM
      console.log(car);
      insertCar(car);
    });  
};

export { postAPI };
