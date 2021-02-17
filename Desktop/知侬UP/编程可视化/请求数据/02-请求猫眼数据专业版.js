const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')

baseUrl = 'https://piaofang.maoyan.com/mdb/rank'
async function getUser() {
  try {
    const { data: resp } = await axios.get(baseUrl)
    const $ = cheerio.load(resp)
    // console.log($('div.tiny-table tbody').html())
    let movieInfo = {}
    let AllMovieInfo = []
    $('div.tiny-table tbody tr').each((i, elem) => {

      // console.log($(elem).html())
      movieInfo.name = $('div.rank span', elem).text()
      movieInfo.time = $('div.time', elem).text()
      $('td.table-data div', elem).each((i, elem) => {
        if (i == 0) {
          movieInfo.office = $(elem).html()
        } else if (i == 1) {
          movieInfo.price = $(elem).html()
        } else if (i == 2) {
          movieInfo.number = $(elem).html()
        }
      })
      AllMovieInfo.push({...movieInfo})
    })
    fs.writeFileSync('02-movie.json', JSON.stringify(AllMovieInfo))
    // console.log(AllMovieInfo)
  } catch (err) {
    console.log(err)
  }
}

getUser()