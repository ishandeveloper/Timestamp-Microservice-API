### TIMESTAMP MICROSERVICE API
An API service that handles dates, and return the correct unix timestamp, UTC string or simply returns the current unix timestamp and UTC timestamp.

<pre><a href="https://idevtimestamp.herokuapp.com/">VIEW LIVE DEMO</a></pre>

<img src="https://github.com/ishandeveloper/Timestamp-Microservice-API/blob/master/screenshots/1.png?raw=false">

## Examples
##### Example Input
<pre>
/api/timestamp/2015-12-25
</pre>
##### Example Output
<pre>
{"unix":1585699200000,"utc":"Wed, 01 Apr 2020 00:00:00 GMT"}
</pre>
##### Example Input
<pre>
/api/timestamp/
</pre>
##### Example Output
<pre>
{"unix":1585751851261,"utc":"Wed, 01 Apr 2020 14:37:31 GMT"}
</pre>

## Documentation

1. The API endpoint is GET /api/timestamp/:date_string

2. A date string is valid if can be successfully parsed by new Date(date_string). Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

4. If the date string is invalid the api returns a JSON having the structure {"error" : "Invalid Date" }.

5. If the date string is valid the api returns a JSON having the structure {"unix": , "utc" : } e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}


## Setup

Clone the repo and install the dependencies 

```bash
git clone https://github.com/ishandeveloper/Timestamp-Microservice-API.git
cd Timestamp-Microservice-API/

npm install
```
To run the app, simply write

```bash
npm start
```

##### Made with ♥ by <a href="https://github.com/ishandeveloper">ishandeveloper</a>


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/ishandeveloper)
