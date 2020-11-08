import GetOldTweets3 as got
import os
import sys
import snscrape.modules.twitter as sntwitter

from google.cloud import language_v1

maxTweets = 30

userName = 'reckless'

tweets = []
print('Getting Tweets')
for i, tweet in enumerate(sntwitter.TwitterSearchScraper(
        'from:@' + userName + ' + since:2015-01-01 until:2020-11-08-filter:links -filter:replies').get_items()):
    if i > maxTweets:
        break
    tweets.append(str(tweet.content))

# os.environ[""]

# Instantiates a client
client = language_v1.LanguageServiceClient()

totalSentimentScore = 0;
totalSentimentMagnitude = 0;
counter = 0 

for i in range(len(tweets)):
    text = tweets[i]
    document = language_v1.Document(content=text, type_=language_v1.Document.Type.PLAIN_TEXT)

    sentiment = client.analyze_sentiment(request={'document': document}).document_sentiment

    totalSentimentScore += float(sentiment.score)
    totalSentimentMagnitude += float(sentiment.magnitude)


print(totalSentimentScore)
print(totalSentimentMagnitude)