const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

baseUrl = 'https://m.creprice.cn/'
async function getUser() {
  try {
    const { data: resp } = await axios.get(baseUrl)
    const $ = cheerio.load(resp)
    let cityInfo = {}
    let AllCityInfo = []
    $('table.formCont tbody#rank tr').each((i, elem) => {
      // console.log('city', $(elem).html())
      // console.log(typeof($(elem).html()))
      $('td', elem).each((i, elem)=>{
        switch (i) {
          case 1:
            cityInfo.Name = $(elem).text()
            cityInfo.Link = 'https://m.creprice.cn/'+$('a',elem).attr("href")
            break;
          case 2:
            cityInfo.Value = +$(elem).text()
            break;
          default:
            break;
        }
      })
      AllCityInfo.push({...cityInfo})
    })
    // 写文件
    fs.writeFileSync('03-house.json', JSON.stringify(AllCityInfo))
    console.log('OK')
  } catch (err) {
    console.log(err)
  }
}

getUser()