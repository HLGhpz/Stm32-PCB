import requests
import json
from bs4 import BeautifulSoup

options = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
    'Accept-Encoding': 'gzip',
}

f = open('Q2.json', 'r')
imgs = json.loads(f.read())
for img in imgs:
    url = img['ImgUrl']
    print(url)

dir_name = 'img'
rep = requests.get(url, headers = options)
with open(dir_name + '/' + 'hello', 'wb') as f:
  f.write(rep.content)
