const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

options = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
  'Accept-Encoding': 'gzip',
  'Connection': 'close',
}

function getUser() {
  try {
    // let filepath = './img'
    // if(!fs.existsSync(filepath)){
    //   fs.mkdirSync(filepath)
    // }

    console.log('Start')
    let msg = fs.readFileSync('Q2.json')
    let eggData = JSON.parse(msg)
    eggData.map(async (item, index)=>{
      let resp = await axios.get(item.ImgUrl)
      console.log(resp.data)
      // resp.data.pipe(fs.createWriteStream(`./${index}`))
    })
  } catch (err) {

  }
}

getUser()