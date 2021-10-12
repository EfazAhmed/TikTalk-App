import requests
from bs4 import BeautifulSoup
import json

class Creator:
    def __init__(self, rank, user, location, nickname, likes, videos, followers, image_url):
        self.rank = rank
        self.user = user
        self.location = location
        self.nickname = nickname
        self.likes = likes
        self.videos = videos
        self.followers = followers
        self.image_url = image_url


url = "https://tokboard.com/users/top"
r = requests.get(url)

with open('extraction_file.html', 'r', encoding="utf8") as f:
    contents = f.read()
    soup = BeautifulSoup(contents, 'html.parser')

    a = soup.find_all('li')

    li = []
    count = 0

    for i in range(2, len(a)):
        rank = a[i].find('div').find_all('span')[-1].text
        user = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find('div', {'class': 'jsx-2959568586 username'}).find('a').text.split()[0]
        location = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find('div', {'class': 'jsx-2959568586 username'}).find('a').text.split()[1]
        nickname = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find('p', {'class': 'jsx-2959568586 nickname'}).text
        likes = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find('span', {'class': 'jsx-2959568586 likes'}).text.split()[0]
        videos = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find('span', {'class': 'jsx-2959568586 videos'}).text.split()[0]
        followers = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find_all('span')[-1].text.split()[0]
        image_url = a[i].find_all('div', {'class', 'jsx-2959568586 details'})[-1].find('img')

        if image_url != None:
            image_url = image_url['src']
            if image_url == '/no-image.png':
                image_url = None

        li.append(Creator(rank, user, location, nickname, likes, videos, followers, image_url))
    #
    # # for i in a:
    # #     print("tokboard.com" + i.find('a')['href'])
    #
    # # for i in li:
    # #     print(i.rank)
    # #     print(i.title)
    # #     print(i.artist)
    #
    dic_li = []

    for song in li:
        temp = {}
        temp['rank'] = song.rank
        temp['user'] = song.user
        temp['location'] = song.location
        temp['nickname'] = song.nickname
        temp['likes'] = song.likes
        temp['videos'] = song.videos
        temp['followers'] = song.followers
        temp['image_url'] = song.image_url
        dic_li.append(temp)

    for i in dic_li:
        print(i)

    json_object = json.dumps(dic_li, indent=4)

    with open("tiktok_creators_db.json", "w") as outfile:
        outfile.write(json_object)

