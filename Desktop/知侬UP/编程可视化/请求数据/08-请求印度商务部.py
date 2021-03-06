import requests
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

url = "https://tradestat.commerce.gov.in/eidb/iecnttopn.asp"

payload = "yy1=2019&radiousd=1&topn=50"
headers = {
    'cookie': "ASPSESSIONIDAGSABRDA=DNGOOAACGNCJBGKFFKOPDMHB",
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    'accept-encoding': "gzip, deflate, br",
    'accept-language': "zh-CN,zh;q=0.9,und;q=0.8",
    'cache-control': "no-cache",
    'connection': "keep-alive",
    'content-type': "application/x-www-form-urlencoded",
    'host': "tradestat.commerce.gov.in",
    'origin': "https://tradestat.commerce.gov.in",
    'pragma': "no-cache",
    'referer': "https://tradestat.commerce.gov.in/eidb/iecnttopnq.asp"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)