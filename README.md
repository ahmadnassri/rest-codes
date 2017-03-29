# HTTP Status Code Badges [![License][license-image]][license-url]

> Automatically generated HTTP Status Code badges for your API documentation, CDN delivery through Cloudflare, Open Source

![](https://rest.codes/plastic/full/200.svg)

## Usage

```
https://rest.codes/<theme>/<type>/<code>.svg
```

###### Example

```html
<img src="https://rest.codes/square/code/403.svg"/>
<img src="https://rest.codes/flat/full/502.png"/>
```


## Contributing

Did not find your favorite HTTP Status code? Please open a pull request!

## Building

This project depends on [`canvas`][canvas] and [`librsvg`][librsvg], please review each installation requirements before attempting to run.

```js
$ npm install
$ node build.js
```

---
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/) · 
> License: [ISC][license-url] · 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) · 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/rest-codes.svg?style=flat-square

[canvas]: https://github.com/Automattic/node-canvas
[librsvg]: https://github.com/2gis/node-rsvg