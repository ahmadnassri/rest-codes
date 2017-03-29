const { join } = require('path')
const { PassThrough } = require('stream')
const { Rsvg } = require('librsvg')
const { writeFile } = require('fs')
const Canvas = require('canvas')

// local dependencies
const colors = require('./docs/_data/colors.json')
const statuses = require('./docs/_data/statuses.json')
const templates = require('./templates/')

// setup canvas
const canvas = new Canvas()
const ctx = canvas.getContext('2d')

ctx.font = '11px Verdana'

// loop through all status codes
Object.keys(statuses).forEach(code => {
  // 1xx, 2xx, etc ...
  const range = Math.floor(code / 100)

  // only recognize colors for known ranges
  const color = range < 6 ? colors[`${range}xx`] : colors['xxx']

  // template locale
  const status = {
    code,
    color,
    reason: statuses[code]
  }

  // calculate text width with canvas
  const width = {
    code: Math.floor(ctx.measureText(status.code).width) + 10,
    reason: Math.floor(ctx.measureText(status.reason).width) + 10
  }

  // loop through all available templates
  Object.keys(templates).forEach(name => {
    // two type of templates as expected
    const types = ['full', 'code']

    // output paths
    const files = {
      code: join(__dirname, 'docs', name , 'code', code),
      full: join(__dirname, 'docs', name , 'full', code)
    }

    // construct svg content
    const content = {
      code: templates[name].code(status, width),
      full: templates[name].full(status, width)
    }

    types.forEach(type => {
      // write svg to disk
      writeFile(`${files[type]}.svg`, content[type], () => {
        // create SVG render instance
        const svg = new Rsvg()

        svg.on('finish', () => {
          const png = {
            height: 20,
            format: 'png',
            width: type === 'code' ? width.code : width.code + width.reason
          }

          // write png to disk
          writeFile(`${files[type]}.png`, svg.render(png).data, Function.prototype)
        })

        // pass content to svg render
        const stream = new PassThrough()
        stream.end(new Buffer(content[type]))
        stream.pipe(svg)
      })
    })
  })
})
