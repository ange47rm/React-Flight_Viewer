## Task

We have placed a number of helpful todos inside the code (see `index.js` and `App.jsx`) to help get you started, the main items we are looking for are:

- Fetch flight results from the provided `flights.json` and format them into client readable results.
  - You are not required to serve this separately from the dev server (i.e. `npm start`).

- Use the returned data to display a page of results that matches the given design.
  - Times should be displayed in 24 hour format.


## Flight results

The provided `flights` `json` will return two collections of different items:

* **Itineraries** - These are the containers for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.

* **Legs** - These are journeys (outbound, return) with **duration**, **stops** and **airlines**.

A good structure to represent trip options would be hierarchical:

```
Itineraries
  Legs
```


### Installing Node

The full stack test is developed using Node, using the following versions:

  **Node:** `LTS/Erbium (^12.13.0)`

  **npm:** `^6.12.0`

We recommend using [nvm](https://github.com/nvm-sh/nvm) or [nave](https://github.com/isaacs/nave) to manage your Node environment on **Unix/macOS** systems. If you use **Windows** then we recommend using [nvm-windows](https://github.com/coreybutler/nvm-windows).

To install the correct npm and node version for the project, use `nvm install` or `nave install`.

The full stack test has built-in support for these. Just run `nvm use` or `nave auto` to select the correct Node version.


## Running the project

To startup the frontend client run the following command.

* `npm start` - This will start the application for development
* `npm run build` - Will create a production optimised build
* `npm test` - Will run the front end tests
