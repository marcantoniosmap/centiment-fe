var widgetLibrary={
    'priceChart':{
        id:'priceChart',
        title:'Coin Price Chart',
        activities:['Refresh Data','Change Timeframe','Information'],
        simpleExplanation:'indicates the movement of Coin Price in conventional candlestick format',
        completeExplanation:<>
            <p>Coin Price chart is exactly the same chart you use in a conventional candlestick format, the purpose is to <b>visualize price movement.</b></p>
            <p>Green candlestick means that the closing price is <span className="text-green font-weight-bold">higher</span> than the day's opening price, and <span className="text-red font-weight-bold">lower</span> for red candlestick.</p>
            <p>The line in this chart indicates a moving average, an indicator used to draw out trend.</p>
        </>

    },
    'coinInfo':{
        id:'coinInfo',
        title:'Coin Information',
        activities:['Refresh Data','Information'],
        simpleExplanation:'shows basic information of coin, including tweet counts and sentiment score',
        completeExplanation:<>
            <p>Coin Information gives a brief summary of the chosen coin, its price, volume, sentiment score, and tweet volume.</p>
            <p>Price and Volume reflects to the coin trading data, which can actually be retrieved in many other app, however sentiment and tweet volume is a result of our <b>customized data pipeline</b>.</p>
            <p>This widget is used to point out the important figures, and gives idea on how it differs compared to the previous day data.</p>
        </>

    },
    'recentTweets':{
        id:'recentTweets',
        title:'Recent Tweets',
        activities:['Refresh Data','Information'],
        simpleExplanation:'shows recent tweets of the choosen coin together with its sentiment score',
        completeExplanation:<>
            <p>Recent Tweets shows the <b>important tweets</b> that were lastly uploaded regarding a coin, which when clicked, it will bring you to the original tweet in the tweeter app/site. </p>
            <p>On the right hand side, we put the sentiment score of its tweet sourced from our machine learning model. The Score is in of 1-100 range, the bigger the better sentiment it detects.</p>
            <p>Instead of opening the twitter app on the other tab, we gather all the needed tweet you want regarding a coin in a simpler view, and of course with its sentiment score.</p>
        </>

    },
    'widget-1':{
        id:'widget-1',
        title:'Tweet Volume and Sentiment',
        activities:['Refresh Data','Change Timeframe','Change Widget','Delete Widget','Information'],
        simpleExplanation:'Visualize the tweet volume and color to indicates sentiment score',
        completeExplanation:<>
            <p>Tweet volume and sentiment is a customizable widget, which means user can activate it on demand.</p>
            <p>The bar represents the amount of <b>tweet captured for a coin</b> and how it changes throughout a certain timeframe. While the color indicates whether that day has a <span className="test-green">positive</span>positive or <span className="test-green">negative</span> overall sentiment.</p>
            <p>The x-axis represents the time while the y-axis represents the amount of tweet volume. </p>
        </>
    },
    'widget-2':{
        id:'widget-2',
        title:'Twitter Sentiment Test',
        activities:['Change Widget','Delete Widget','Information'],
        simpleExplanation:'Enables user to try out the sentiment analysis AI used to score tweets',
        completeExplanation:<>
            <p>Twitter Sentiment Test is a customizable widget, which means user can activate it on demand.</p>
            <p>In this widget, you can try out our machine learning algorithm to see how <b>accurate</b> is our sentiment analysis.</p>
            <p>By writing inside the text box and submitting it, you shall expect a score shown in the bottom left corner of the widget.</p>
        </>

    },
    'widget-3':{
        id:'widget-3',
        title:'Trending Coin based on Tweets',
        activities:['Refresh Data','Change Timeframe','Change Widget','Delete Widget','Information'],
        simpleExplanation:'Shows the top 3 coins that outperforms the other coin in a given period',
        completeExplanation:<>
            <p>Trending Coin based on tweets is a customizable widget, which means user can activate it on demand.</p>
            <p>This widget shows the top 3 coins that have the <b>most tweet volume increase</b> from the previous day, which leads it to be the most trending regardless of its sentiment score.</p>
            <p>The top 3 will be shown in a leaderboard format, first second and third place. </p>
        </>

    },
    'widget-4':{
        id:'widget-4',
        title:'Tweet & Trade Correlation',
        activities:['Refresh Data','Change Timeframe','Change Widget','Delete Widget','Information'],
        simpleExplanation:'Draws the correlation between the tweet volume and traded volume',
        completeExplanation:<>
            <p>Tweet and Trade Correlation is a customizable widget, which means user can activate it on demand.</p>
            <p>This widget draw the movement of the tweet volume and trading volume, in mission to find the <b>correlation between the two</b>. If the two line lies close to each other, it shows that the two variables have high correlation.</p>
            <p>The legend will be shown on the chart, <span className="text-green font-weight-bold">green</span> for tweet volume while <span className="text-red font-weight-bold">red</span>  for trade volume.</p>
        </>

    },
    'widget-5':{
        id:'widget-5',
        title:'Coin Sentiment Comparison',
        activities:['Refresh Data','Change Timeframe','Change Widget','Delete Widget','Information'],
        simpleExplanation:'Compares all the seven coins sentiment performance',
        completeExplanation:<>
            <p>Coin Sentiment Comparison is a customizable widget, which means user can activate it on demand.</p>
            <p>Inspired from Investing.com, this widget shows the sentiment of all the 7 coins in our application. The green indicates <span className="text-green  font-weight-bold">positive</span> sentiment while the red represents <span className="text-red font-weight-bold">negative</span>.</p>
            <p>This widget is done to not only compare performance between days, but rather among coins. How does one perform in comparison to the other coin.</p>
        </>

    },
    'widget-6':{
        id:'widget-6',
        title:'Twitter Fear and Greed Index',
        activities:['Refresh Data','Change Widget','Delete Widget','Information'],
        simpleExplanation:'visualize a sentiment score index in a given time period',
        completeExplanation:<>
            <p>TTwitter Fear and Greed Index is a customizable widget, which means user can activate it on demand.</p>
            <p>Basic Fear and Green Index is commonly used not only in the crypto space. the speedometer represents where is the sentiment position from a range from <span className="text-red font-weight-bold">Fear</span> to <span className="text-green font-weight-bold">Greed</span></p>
            <p>This widget also shows you </p>
        </>

    },
}
export default widgetLibrary