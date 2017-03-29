exports.code = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.code }" height="20">
    <g shape-rendering="crispEdges">
      <rect width="${ width.code }" height="20" fill="${ status.color }"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 }" y="14">${ status.code }</text>
    </g>
  </svg>`
}

exports.reason = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.reason }" height="20">
    <g shape-rendering="crispEdges">
      <rect width="${ width.reason }" height="20" fill="${ status.color }"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.reason / 2 }" y="14">${ status.reason }</text>
    </g>
  </svg>`
}

exports.full = function (status, width, reverse = false) {
  const primary = reverse ? status.color : '#555'
  const secondary = reverse ? '#555' : status.color

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.code + width.reason }" height="20">
    <g shape-rendering="crispEdges">
      <rect width="${ width.code }" height="20" fill="${ primary }"/>
      <rect x="${ width.code }" width="${ width.reason }" height="20" fill="${ secondary }"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 }" y="14">${ status.code }</text>
      <text x="${ width.code + width.reason / 2 - 1 }" y="14">${ status.reason }</text>
    </g>
  </svg>`
}
