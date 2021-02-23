const axios = require('axios').default
const fs = require('fs')
const cheerio = require('cheerio')
const moment = require('moment')

baseUrl = 'https://piaofang.maoyan.com/dashboard/movie'
async function getUser() {
  try {
    const firstDaty = moment('20210213').format("YYYY-MM-DD")
    // console.log(firstDaty)
    // console.log(moment(firstDaty).add(1, 'days').format("YYYY-MM-DD"))

    const { data: resp } = await axios.get(`${baseUrl}?data=${firstDaty}`)
    const $ = cheerio.load(resp)
    let movieInfo = {}
    let AllMovieInfo = []
    // $('div.movielist tbody tr').each((i, elem) => {
    //   // movieInfo.Name = $('td.moviename-td div div.moviename-desc p.moviename-name', elem).text()
    //   // movieInfo.Time = $('td.moviename-td div div.moviename-desc p.moviename-info span', elem).text()
    //   console.log($(elem).html())
    // })
    console.log($('div.movielist tbody tr').html())
    
    // let movieInfo = {}
    // let AllMovieInfo = []
    // $('div.tiny-table tbody tr').each((i, elem) => {

    //   // console.log($(elem).html())
    //   movieInfo.name = $('div.rank span', elem).text()
    //   movieInfo.time = $('div.time', elem).text()
    //   $('td.table-data div', elem).each((i, elem) => {
    //     if (i == 0) {
    //       movieInfo.office = $(elem).html()
    //     } else if (i == 1) {
    //       movieInfo.price = $(elem).html()
    //     } else if (i == 2) {
    //       movieInfo.number = $(elem).html()
    //     }
    //   })
    //   AllMovieInfo.push({...movieInfo})
    // })
    // fs.writeFileSync('02-movie.json', JSON.stringify(AllMovieInfo))
    // // console.log(AllMovieInfo)
  } catch (err) {
    console.log(err)
  }
}

getUser()