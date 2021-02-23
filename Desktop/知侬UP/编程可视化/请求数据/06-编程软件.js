const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

baseUrl = 'https://www.tiobe.com/tiobe-index/'

async function getData() {
  try {
    const { data: resp } = await axios.get(baseUrl)
    const $ = cheerio.load(resp)
    let language = []
    let allLanguage = []
    $('table#top20 tbody tr').map((index, elem) => {
      // console.log($(elem).html())
      $('td', elem).map((index, elem) => {
        let item = null;
        switch (index) {
          case 0:
          case 1:
            item = +$(elem).text()
            break;
          case 3:
            item = $(elem).text()
            break
          case 4:
          case 5:
            item = +($(elem).text().replace('%', ''))
            break
          default:
            item = null
            break;
        }
        if (item != null) {
          language.push(item)
        }
      })
      allLanguage.push(language)
      language = []
    })
    $('table#otherPL tbody tr').map((index, elem) => {
      language = [null, null, null, null, null];
      $('td', elem).map((index, elem) => {
        switch (index) {
          case 0:
            language[0] = +$(elem).text()
            break;
          case 1:
            language[2] = $(elem).text()
            break;
          case 2:
            language[3] = +($(elem).text().replace('%', ''))
            break
          default:
            break;
        }
      })
      allLanguage.push(language)
      language = []
    })
    fs.writeFileSync('06-language.json', JSON.stringify(allLanguage))
    console.log('OK')
  } catch {

  }
}

getData()