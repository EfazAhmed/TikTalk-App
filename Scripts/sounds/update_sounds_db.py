import requests
from bs4 import BeautifulSoup
import json

class Song:
    def __init__(self, rank, title, artist, image_url, views, song_status_code, song_url):
        self.rank = rank
        self.title = title
        self.artist = artist
        self.image_url = image_url
        self.views = views
        self.song_status_code = song_status_code
        self.song_url = song_url

url = "https://tokboard.com"
r = requests.get(url)

with open('extraction_file.html', 'r', encoding="utf8") as f:
    contents = f.read()
    soup = BeautifulSoup(contents, 'html.parser')
    a = soup.find_all('li')

    li = []

    for i in range(2, len(a)):
        rank = a[i].find_all('div')[-1].text
        title = a[i].find('a').text
        artist = a[i].find('p').text
        image_url = a[i].find('img')['src']
        views = a[i].find('span', {'class': 'jsx-3696330819 views'}).text
        song_status_code = 0
        song_url = ''


        #song status code ex. 200, 404, etc as int
        temp_url = url + a[i].find('a')['href']
        r = requests.get(temp_url)
        song_status_code = r.status_code

        if song_status_code == 200:
            soup = BeautifulSoup(r.content, 'html.parser')
            song_url = soup.find('div').find_all('p')[1].find('a')['href']



        li.append(Song(rank, title, artist, image_url, views, song_status_code, song_url))

    # for i in a:
    #     print("tokboard.com" + i.find('a')['href'])

    # for i in li:
    #     print(i.rank)
    #     print(i.title)
    #     print(i.artist)

    dic_li = []

    for song in li:
        temp = {}
        temp['rank'] = song.rank
        temp['title'] = song.title
        temp['artist'] = song.artist
        temp['image_url'] = song.image_url
        temp['views'] = song.views
        temp['song_status_code'] = song.song_status_code
        temp['song_url'] = song.song_url
        dic_li.append(temp)

    #print(dic_li)

    json_object = json.dumps(dic_li, indent=4)

    with open("tiktok_sounds_db.json", "w") as outfile:
        outfile.write(json_object)

