# HTTP Status Code Badges [![License][license-image]][license-url]

> Automatically generated HTTP Status Code badges for your API documentation, CDN delivery through Cloudflare, Open Source

## Gallery

View the full gallery [here](https://rest.codes)

![](https://rest.codes/flat/code/200.svg)
![](https://rest.codes/flat/code/301.svg)
![](https://rest.codes/flat/code/400.svg)
![](https://rest.codes/flat/code/500.svg)

![](https://rest.codes/flat/square/200.svg)
![](https://rest.codes/flat/square/301.svg)
![](https://rest.codes/flat/square/400.svg)
![](https://rest.codes/flat/square/500.svg)

![](https://rest.codes/flat/full/200.svg)
![](https://rest.codes/flat/full/301.svg)
![](https://rest.codes/flat/full/400.svg)
![](https://rest.codes/flat/full/500.svg)

## Usage

```
https://rest.codes/<theme>/<style>/<code>.<svg|png>
```

###### Example

```html
<img src="https://rest.codes/flat/code/403.svg"/>
<img src="https://rest.codes/rounded/full/502.png"/>
<img src="https://rest.codes/plastic/code/403.svg"/>
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
