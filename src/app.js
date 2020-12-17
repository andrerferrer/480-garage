//////////////
// IMPORTING
//////////////
import { fetchCars } from './components/fetch_cars';
import { postAPI } from './components/post_api';


/////////////////////
// EVENT LISTENERS //
/////////////////////

// To add a new car
// 1. Add an event listener on the form
const form = document.querySelector('.car-form');

form.addEventListener('submit', (event) => {
  // 2. Prevent default behavior when we submit it
  event.preventDefault();
  postAPI();
});

///////////////////////
// CALLING FUNCTIONS //
///////////////////////
fetchCars();