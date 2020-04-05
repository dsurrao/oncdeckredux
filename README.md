# Oncdeckredux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

This Angular app has VERY basic functionality of displaying a list of patients, and allows adding to and deleting from the list.

The data source is a CouchDB instance which the app accesses directly via the CouchDB HTTP API.

No PouchDB instance has been used in this case.

## Configuration

environment.ts and environment.prod.ts have been added to .gitignore

Before building, add a file `src/environments/environment.ts` with the following settings:
```
export const environment = {
  production: false,
  apiUrl: 'couchdb url',
  username: 'couchdb username',
  password: 'couchdb password'
};
```
Similarly, for a production environment, add `src/environments/environment.prod.ts`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Technologies used and their documentation
Angular: https://angular.io

Ngrx: https://ngrx.io (see also Redux docs: https://redux.js.org/)

Rxjs: https://rxjs.dev
