# Connected Car Hackathon


Car connected Social media inferential system - Will make suggestions to users via data captured through the driving style, telemetry and social media platforms.

Users are suggested events, locations and various other themes via text or email. Also users are also capable of selecting an adventure or route based of personal past trends. Users are able to select something in their preferences or able to create a route or destination opposite of their preferences, something they have not experienced before.






###specific example
Alex goes to the movies every friday and watches a chick flick movie. He goes to the local movie theater and then goes home. For the last two months this was his trend. He recently got promoted and now doesn't come home till 7:30. He changes his scheduele and stops by the local taco place before he goes home. He doesnt know what to watch. ANDTHEN app suggests movie prefferences becuase it saw the trend and then saw that he recently changed his driving trend and assumed data from fandango, netflix, and locations from telementry from the car.

###Technologies used

 - Netflix api
 - Google places
 - Movie credit api
 - node
 	- api calls 
 - some sort of frontend (not yet implemented
 - alexa? (not yet implemented)
 - mojio for trends, database and simulation

## Car side opperation
1. Car tracks telemtery, gps and location data
2. This data is then databased and trends are generalized
Data that is need:
	- location
	- map
	- time
	- time spent at location
	- local buisness


## Server side operations
1. Data is databased
2. Trends are analized
3. Algorithem finds suggestions based on trends, timelines and locations
4. Sends texts or emails.

## How to run the app from this repo
 npm install --save
 sudo nodemon
 
 
## Intended Client run process
1. User buys mojio device and logs into mojio
2. Client logs into ANDTHEN
3. Logs all social media sites they use 
4. Records some personal info and phone
5. User gets regular suggestions for small buisness
 
 
 
##Things that need to be done
- Get mojio working, with authenitication
- create basica trend analysis
- connect up more social media networks
- connect up a way to find out whats going on in the area, so for example to find what happen at a location at 7:00 pm
- cell sms node service


