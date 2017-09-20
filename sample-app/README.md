# Sample App Overview

This app was generated with:

`ng new sample-app`

Lets take a deep dive into this app.

## src/index.html

There's zero JavaScript tag. The only indication this might be a SPA is `<app-root></app-root>`. 

## ng serve

When we run `ng serve` we get the following javascript added.

```html
<script type="text/javascript" src="inline.bundle.js"></script>
<script type="text/javascript" src="polyfills.bundle.js"></script>
<script type="text/javascript" src="styles.bundle.js"></script>
<script type="text/javascript" src="vendor.bundle.js"></script>
<script type="text/javascript" src="main.bundle.js"></script>
```

Here's what happens:

1. Angular CLI loads its configuration from `.angular-cli.json`
2. Angular CLI runs `Webpack` to build and bundle all JavaScript and CSS code
3. Angular CLI starts `Webpack` dev server to preview the result on localhost:4200

What's WebPack? Webpack is a build tool that takes all your JavaScript, CSS, Images, with dependencies then bundles them into static assets. For more information on webpack go here: [https://webpack.github.io/](https://webpack.github.io/).

## .angular-cli.json

By opening this file we get more information:

```json
"apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
```

## The App

So first from the JSON above, find the `main` entry point. This is the part of the Angular app that gets everything moving. It's `main.ts`.

```typescript
// main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // <---- look here!!!!
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```

The main kicks off our `app module`. All that matter for now is the app.module file located on the import above.

```typescript
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; // <--- look here!!!

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Inside the `app module` this calls the `app component` which is where the real magic of this component based framework happens.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

A few notes:

1. Note the selector `app-root`. Recall this from the `index.html` file?
2. Note `templateUrl`, this specifies the html template we're using for the component.
3. Note `styleUrls`, this specifies the css we're using for the component.
4. Finally we have some data `title` that is exported with the object.

The `title` is merged with the `templateUrl` via the same handlebar style tags as Angular1.

```typescript
<!--The content below is only a placeholder and can be replaced.-->
...
  <h1>
    Welcome to {{title}}!
  </h1>
...
```

## What about Ajax?

Earlier this year I created an Angular2 example along with others, React, VueJS, Etc. I will show you how to do some Ajax with Angular and then show you how Angular compares with VueJS and React.

```typescript
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user'

@Component({
  selector: 'my-app',
  templateUrl: './app2/hello.html'
})

export class AppComponent2 {
  name = 'world';
  users: User[] = [];
  constructor(http: Http) {
    var that = this;
    this.users = [];
    http.get('./data.json')
    .subscribe(result => that.users = result.json().list);
  }
}
```

What's `subscribe`?

Subscribe is a methods you on an `Observable`. Observables are like Promises Except:

* `Observables` handle multiple values over time	
* `Promises` are only called once and will return a single value
* `Observables` are cancellable	
* `Promises` are not cancellable

In the method above `http.get` is an RxJx `observable` object. You can perform any operator on the observable you'd like, you can also chain them together. For more information on Rx Operators [click here](http://reactivex.io/documentation/operators.html), or to the  [RxJs](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) website.

## More JS Examples

For more JS Examples like VueJS, React, Ember go here:
[https://github.com/scottpreston/js-examples](https://github.com/scottpreston/js-examples). These are current as of Feb 2017.
