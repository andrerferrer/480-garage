const insertCar = (car) => {
  // 1- find the element that we will insert the car data
  const list = document.querySelector('.cars-list');
  // 2- build the car HTML

  const brand = car.brand;
  const model = car.model;
  const owner = car.owner;
  const plate = car.plate;

  const carHTML = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${brand} ${model}" />
      </div>
      <div class="car-info">
        <h4>${brand} ${model}</h4>
        <p><strong>Owner:</strong> ${owner}</p>
        <p><strong>Plate:</strong> ${plate}</p>
      </div>
    </div>
  `;
  // 3- actually insert the html
  list.insertAdjacentHTML('beforeend', carHTML);
};

export { insertCar };