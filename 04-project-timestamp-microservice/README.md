# Timestamp Microservice

This is my code for the Timestamp Microservice project. The original link from freecodecamp is here: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

# User story - User submits no date to the API

```gherkin
When the user submits a request to /api/
Then the API returns a JSON with current unix timestamp and UTC date
```

# User story - User submits valid date to the API

```gherkin
When the user submits a request to /api/<Date>
Then the API returns a JSON with a <unix> timestamp and a <UTC> date
Examples:
| Date | unix |  UTC |
| 2015-12-25 | 1451001600000 | "Fri, 25 Dec 2015 00:00:00 GMT" |
| 1451001600000 | 1451001600000 | "Fri, 25 Dec 2015 00:00:00 GMT" |
```

# User story - User submits invalid date to the API

```gherkin
When the user submits a /api/<Invalid Date>
Then the API returns a JSON with { error: "Invalid Date" }
Examples:
| Invalid Date |
| 2015-12-25f |
| adasfdasdf |
```

# Tests that must pass

1. A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
2. A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
3. A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
4. Your project can handle dates that can be successfully parsed by new Date(date_string)
5. If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
6. An empty date parameter should return the current time in a JSON object with a unix key
7. An empty date parameter should return the current time in a JSON object with a utc key
