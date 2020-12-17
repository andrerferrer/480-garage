## Usage

First clone this repository. 
You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
export BATCH_NUMBER=480
cd ~/code/$USER
git clone git@github.com:andrerferrer/$BATCH_NUMBER-garage.git
cd $BATCH_NUMBER-garage
yarn install
stt # Open this folder in Sublime Text
webpack-dev-server # run the server on localhost:8080
```

## What are we doing today?

We'll finish this code using the [Garage API](https://github.com/lewagon/garage-api#wagon---garage-api-).

⚠️⚠️⚠️
  Our GARAGE_SLUG will be our batch number.
⚠️⚠️⚠️

## Tips and Tricks

### What is the url?

`url: https://wagon-garage-api.herokuapp.com/:garage/cars`

So, if the garage name is `banana`, the url will be `https://wagon-garage-api.herokuapp.com/banana/cars`

### How to fetch using POST?

```javascript
 const dataToSend = {
 	key1: value1,
 	key2: value2,
 	key3: value3
 	// ...etc
 }

 fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
    .then(/* Do your Magic */);
```
