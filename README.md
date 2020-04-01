### TIMESTAMP MICROSERVICE API
An API service that handles a dates, and return the correct unix timestamp, UTC string or simply returns the current unix timestamp and UTC timestamp.

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
