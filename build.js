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
    const template = templates[name]

    // output paths
    const files = {
      code: join(__dirname, 'docs', name , 'code', code),
      dark: join(__dirname, 'docs', name , 'dark', code),
      full: join(__dirname, 'docs', name , 'full', code),
      reason: join(__dirname, 'docs', name , 'reason', code),
      square: join(__dirname, 'docs', name , 'square', code)
    }

    // construct svg content
    const content = {
      code: template.code ? template.code(status, width) : false,
      dark: template.full ? template.full(status, width, true) : false,
      full: template.full ? template.full(status, width) : false,
      reason: template.reason ? template.reason(status, width) : false,
      square: template.square ? template.square(status, width) : false
    }

    Object.keys(content).forEach(type => {
      if (!content[type]) return

      // write svg to disk
      writeFile(`${files[type]}.svg`, content[type], () => {
        // create SVG render instance
        const svg = new Rsvg()

        svg.on('finish', () => {
          const png = {
            format: 'png',
            height: 20
          }

          switch (type) {
            case 'square':
              png.height = width.code

            case 'code':
              png.width = width.code
              break;

            case 'reason':
              png.width = width.reason
              break;

            default:
              png.width = width.code + width.reason
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
