<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

# vue-chat-client

<p align="center">
  <a href="https://npmcharts.com/compare/vue-chat-client?minimal=true"><img src="https://img.shields.io/npm/dm/vue-chat-client.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-chat-client"><img src="https://img.shields.io/npm/v/vue-chat-client.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-chat-client"><img src="https://img.shields.io/npm/l/vue-chat-client.svg" alt="License"></a>
  <br>
</p>

> This is a chat client for Vue.js

### Installation

#### NPM + ES2015

``` bash
npm install vue-chat-client --save
npm install sass-loader node-sass -save-dev
```

``` js
import Vue from 'vue'
import ChatClient from 'vue-chat-client'
Vue.component('chat-client', ChatClient)
```

### Usage

``` js
export default {
  data() {
    return: {
      feeds: [
        {
          type: 'message',
          uid: 'UID',
          text: 'Example message'
        }
      ]
    }
  }
}
```

``` html
<!-- bind to it normally in templates -->
<chat-client :feeds="feeds"/>
```

## Development Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Trinketmage
