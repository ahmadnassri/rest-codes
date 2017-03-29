exports.code = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.code }" height="20">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.code }" height="20" rx="3" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.code }" height="20" fill="${ status.color }"/>
      <rect width="${ width.code }" height="20" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 }" y="15" fill="#010101" fill-opacity=".3">${ status.code }</text>
      <text x="${ width.code / 2 }" y="14">${ status.code }</text>
    </g>
  </svg>`
}

exports.square = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.code }" height="${ width.code }">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.code }" height="${ width.code }" rx="3" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.code }" height="${ width.code }" fill="${ status.color }"/>
      <rect width="${ width.code }" height="${ width.code }" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 }" y="${ width.code / 2 + 5 }" fill="#010101" fill-opacity=".3">${ status.code }</text>
      <text x="${ width.code / 2 }" y="${ width.code / 2 + 4 }">${ status.code }</text>
    </g>
  </svg>`
}

exports.reason = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.reason }" height="20">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.reason }" height="20" rx="3" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.reason }" height="20" fill="${ status.color }"/>
      <rect width="${ width.reason }" height="20" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.reason / 2 }" y="15" fill="#010101" fill-opacity=".3">${ status.reason }</text>
      <text x="${ width.reason / 2 }" y="14">${ status.reason }</text>
    </g>
  </svg>`
}

exports.full = function (status, width, reverse = false) {
  const primary = reverse ? status.color : '#555'
  const secondary = reverse ? '#555' : status.color

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${ width.code + width.reason }" height="20">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.code + width.reason }" height="20" rx="3" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.code }" height="20" fill="${ primary }"/>
      <rect x="${ width.code }" width="${ width.reason }" height="20" fill="${ secondary }"/>
      <rect width="${ width.code + width.reason }" height="20" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 }" y="15" fill="#010101" fill-opacity=".3">${ status.code }</text>
      <text x="${ width.code / 2 }" y="14">${ status.code }</text>
      <text x="${ width.code + width.reason / 2 - 1 }" y="15" fill="#010101" fill-opacity=".3">${ status.reason }</text>
      <text x="${ width.code + width.reason / 2 - 1 }" y="14">${ status.reason }</text>
    </g>
  </svg>`
}
