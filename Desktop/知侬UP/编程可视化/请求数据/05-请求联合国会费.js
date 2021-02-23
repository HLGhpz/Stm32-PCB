const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

baseUrl = 'https://www.un.org/zh/ga/contributions/index.shtml'
async function getUser() {
  try {
    const { data: resp } = await axios.get(baseUrl)
    const $ = cheerio.load(resp)
    let countyInfo = []
    let AllCountryInfo = []
    $('div#content tbody tr').each((i, elem) => {
      // console.log('elem', $(elem).html())
      countyInfo = []
      $('td', elem).each((i, elem) => {
        let item = null
        if (i != 0) {
          item = +($(elem).text().split(" ").join(""))
        } else {
          item = $(elem).text()
        }
        countyInfo.push(item)
      })
      if (countyInfo.length == 5) {
        AllCountryInfo.push(countyInfo)
      }
    })
    // 写文件
    fs.writeFileSync('05-foud.json', JSON.stringify(AllCountryInfo))
    console.log('OK')
  } catch (err) {
    console.log(err)
  }
}

getUser()