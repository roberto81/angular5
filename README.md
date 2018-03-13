# Start

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Install
run 
```
npm install
```

### note
if you want to use a proxy you need to add this block of code 
```
proxy: {
    '/api/*': {
      target: 'http://localhost:3000',
        secure: false
    }
  }
```
in webpack.json in the section
```
"devServer": {
  "historyApiFallback": true

}
```
result:
```
"devServer": {
  "historyApiFallback": true,

    proxy: {
    '/api/*': {
      target: 'http://localhost:3000',
        secure: false
    }
  }

} 
```


## Development server

"npm start" to serve the app using webpack-dev-server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

"npm run build" to build. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

"npm test" to run unit tests.

## Running end-to-end tests

"npm run e2e" to run protractor.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Use mock.json

1. install json-server
   - run ```npm install -g json-server ``` for install on global mode ( System )
   - run ```npm install --save-dev json-server ``` for install on project and add it on package.json

2. Run json-server
   - run ``` json-server mock.json --delay ms --routes mock_routes.json``` where ms is the desired millisecond value of delay
