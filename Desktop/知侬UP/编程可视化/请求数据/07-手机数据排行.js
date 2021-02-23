const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

baseUrl = 'https://www.dxomark.com/rankings'
options = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
  'Accept-Encoding': 'gzip',
  'Connection': 'close',
}

async function getData() {
  try {
    const { data: resp } = await axios.get(baseUrl, {
      headers: options
    })
    const $ = cheerio.load(resp)
    let smartphones = []
    let allSmartphones = []
    $('div.rankings div.row-container').map((index, elem) => {
      console.log('index', $(elem).html())
      // $('div.device-row div.col', elem).map((index, elem) => {
      //   let item = null
      //   if (index == 0) {
      //     item = $(elem).text()
      //   }else{
      //     item = $('span', elem).text()
      //   }
      //   smartphones.push(item)
      // })
      // console.log(smartphones)
      // allSmartphones.push(smartphones)
      // smartphones = []
    })

    // fs.writeFileSync('07-phone.json', JSON.stringify(allSmartphones))
    // console.log('OK')
  } catch(err) {
    console.error(err)
  }
}

getData()