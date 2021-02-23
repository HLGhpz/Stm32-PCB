const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

baseUrl = 'https://pic.sogou.com/pics?query=%E7%9A%AE%E8%9B%8B'
options = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
  'Accept-Encoding': 'gzip',
  'Connection': 'close',
}
async function getUser() {
  try {
    const { data: resp } = await axios.get(baseUrl, {
      headers: options
    })
    const $ = cheerio.load(resp)
    console.log(resp)

    // let countyInfo = []
    // let AllCountryInfo = []
    $('ul.figure-result-list li').each((i, elem) => {
      // console.log('elem', $('div a img', elem).html())
      console.log($(elem).html())
    })
    // 写文件
    // fs.writeFileSync('05-foud.json', JSON.stringify(AllCountryInfo))
    // console.log('OK')
  } catch (err) {
    console.log('err')
  }
}

getUser()