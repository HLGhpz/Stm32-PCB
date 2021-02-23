var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://tradestat.commerce.gov.in/eidb/iecnttopn.asp',
  headers: {
    cookie: 'ASPSESSIONIDAGSABRDA=DNGOOAACGNCJBGKFFKOPDMHB',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,und;q=0.8',
    'cache-control': 'no-cache',
    connection: 'keep-alive',
    'content-type': 'application/x-www-form-urlencoded',
    host: 'tradestat.commerce.gov.in',
    origin: 'https://tradestat.commerce.gov.in',
    pragma: 'no-cache',
    referer: 'https://tradestat.commerce.gov.in/eidb/iecnttopnq.asp'
  },
  data: {yy1: '2019', radiousd: '1', topn: '50'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
