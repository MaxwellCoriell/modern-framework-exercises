# Wide World Travel Guides

#### Part 2: Adding a factory

## Prerequisite

It is recommended that you complete the [first Wide World Travel](./MF_WIDE_WORLD_TRAVEL.md) exercise before starting this one.

## Setup

Add a `factories` directory to your existing file structure, and in that directory create a file named `guideFactory.js` to hold your new Angular factory module:

```
world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_factories
 |    |     |_ guideFactory.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_ index.html
```

## Instructions

1. Make a new branch called `guide-factory`  
1. Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for `guides.json` from `bookCtrl.js` into `guideFactory.js`
1. Inject your factory into `bookCtrl.js` as a dependency




# Wide World Travel Guides

#### Part 3: Routing

## Prerequisite

It is recommended that you complete the [Wide World Travel factory exercise](./MF_WIDE_WORLD_TRAVEL.md) before starting this one.
   

## Setup

Add a `partials` directory to your existing file structure, and in that directory create a file named `guide-list.html` which will contain the HTML template:

```
world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_factories
 |    |     |_ guideFactory.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_partials
 |    |_ guide-list.html
 |
 |_ index.html
```


## Instructions

You are going to use `ngRoute` to load the HTML for diplaying guide books from a partial into `index.html`

1. Make a new branch called `guide-routing`  
1. Include the separate `angular-route` provider into `index.html`: `<script src="my-path-to-angular-route.min.js"></script>`
1. Inject it into your app as a dependency: `var myApp = angular.module("MyAppName", ['ngRoute']);`
1. Setup routing in app.js using the config method: `app.config(['$routeProvider'....etc`
1. Remember to remove `ng-controller` references from index.html. Angular-route will now handle binding controllers to partials.
