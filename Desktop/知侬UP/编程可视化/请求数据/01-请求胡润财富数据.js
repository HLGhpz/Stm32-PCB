const axios = require('axios').default
const cheerio = require('cheerio')

baseUrl = 'https://www.hurun.net/zh-CN/Info/Detail?num=FEY5J1G3EQ7P'
async function getUser() {
  try{
    const {data: resp} = await axios.get(baseUrl)
    const $ = cheerio.load(resp)
    $('div.mt-5 div:last-of-type tbody tr td').each(
      (i, elem) => {
        console.log($(this))
      }
    )
  }catch (err){
    console.log(err)
  }
}

getUser()