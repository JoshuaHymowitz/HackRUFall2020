# -*- coding: utf-8 -*-
"""
Created on Sat Nov  7 19:42:21 2020

@author: rhymo
"""

#Imports
import GetOldTweets3 as got
import pandas as pd


import snscrape.modules.twitter as sntwitter
import csv
import sys
import numpy
import os

numpy.set_printoptions(threshold=sys.maxsize)

stream = os.popen('snscrape --max-results 10 twitter-hashtag election')
output = stream.read()
print(output)

#^^^ prints the last 10 tweets with the hashtag 'election'

#below is wip and loads tweets into csv

maxTweets = 3000

csvFile = open('place_result.csv', 'w+', newline='', encoding='utf8')

csvWriter = csv.writer(csvFile)
csvWriter.writerow(['id','date','tweet',])

for i,tweet in enumerate(sntwitter.TwitterSearchScraper('from:@realDonaldTrump + from:@JoeBiden').get_items()):
    if i > maxTweets :
        break
    csvWriter.writerow([tweet.id, tweet.date, tweet.content])
csvFile.close()

col_list = ["id", "date", "tweet"]
df = pd.read_csv("place_result.csv", usecols=col_list)

print('[%s]' % '\n \n'.join(map(str, df["tweet"])))

username = "BarackObama"
text_query = "Hello"
since_date = "2011-01-01"
until_date = "2016-12-20"
count = 150
 
# Creation of tweetCriteria query object with methods to specify further
tweetCriteria = got.manager.TweetCriteria().setUsername(username)\
    .setQuerySearch(text_query).setSince(since_date)\
        .setUntil(until_date).setMaxTweets(count)
 

# Creation of tweets iterable containing all queried tweet data
#tweets = got.manager.TweetManager.getTweets(tweetCriteria) #this line is 404ing
 
# List comprehension pulling chosen tweet information from tweets
# Add or remove tweet information you want in the below list comprehension
#tweets_list = [[tweet.id, tweet.author_id, tweet.username, tweet.text, tweet.retweets, tweet.favorites,tweet.replies,tweet.date] for tweet in tweets]
 
# Creation of dataframe from tweets list
# Add or remove columns as you remove tweet information
#tweets_df3 = pd.DataFrame(tweets_list, columns = ['Tweet Id', 'Tweet User Id', 'Tweet User', 'Text','Retweets', 'Favorites', 
 #                                                'Replies', 'Datetime'])

