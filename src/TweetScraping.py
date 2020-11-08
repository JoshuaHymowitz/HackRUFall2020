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
maxTweets = 3000

csvFile = open('place_result.csv', 'a', newline='', encoding='utf8')

csvWriter = csv.writer(csvFile)
csvWriter.writerow(['id','date','tweet',])

for i,tweet in enumerate(sntwitter.TwitterSearchScraper('from:@burakoglakci + since:2015-12-02 until:2020-11-05-filter:links -filter:replies').get_items()):
    if i > maxTweets :
        break
    csvWriter.writerow([tweet.id, tweet.date, tweet.content])
csvFile.close()


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

