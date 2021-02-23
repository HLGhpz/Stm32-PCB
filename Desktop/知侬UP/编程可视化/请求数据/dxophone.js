const fs = require('fs')

const dxo = JSON.parse(fs.readFileSync('dxophone.json'))

dxo.map(item => {
  item[5] = item[0].split(" ")[0]
  // console.log(item)
})

fs.writeFileSync('dxophone.json', JSON.stringify(dxo))
console.log('OK')