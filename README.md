# Oncdeckredux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

This Angular app has basic functionality of displaying a list of patients, and allows adding to and deleting from the list.

**See wiki page for more details**

https://github.com/dsurrao/oncdeckredux/wiki


## Building and deploying to Github pages
Build app for deployment to github pages:
```
ng build --prod --output-path docs --base-href /oncdeckredux/
```

Site: https://dsurrao.github.io/oncdeckredux/


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Serving pwa branch locally
'ng serve` does not work with service workers so we have to run an external http server

`brew install http-server`

`ng build --prod`

`http-server -p 8080 -c-1 dist/oncdeckredux`

## Technologies used and their documentation
Angular: https://angular.io

Ngrx: https://ngrx.io (see also Redux docs: https://redux.js.org/)

Rxjs: https://rxjs.dev

Unit testing: https://angular.io/guide/testing
