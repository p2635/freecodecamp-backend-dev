# URL Shortener Microservice

This is the URL Shortener Microservice freecodecamp project, the original instructions can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.

# Tests that I must pass

1. You can POST a URL to `/api/shorturl` and get a JSON response with original_url and short_url properties. Here's an example: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`.
2. When you visit `/api/shorturl/<short_url>`, you will be redirected to the original URL.
3. If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain `{ error: 'invalid url' }`

HINT from freecodecamp: Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function dns.lookup(host, cb) from the dns core module to verify a submitted URL.

# The high level approach

Looking at tests 1 and 2 - At first, I thought I had to code some complicated algorithm. One that not only converts a string to a specified number, but also one that reverses it back to a string. When I thought back to previous lessons, I remember mongodb supports IDs so I can use that to build up a database.

Hopefully the short_url that I create does not have to match up with the example website. Otherwise, how am I supposed to know how to code this without essentially using their database?

# Breaking down the problem

These are the necessary ingredients for the solution.

- [x] Connect to a live mongodb instance.
- [ ] Create database records and save them to mongodb (POST).
  - [ ] If the user POSTs for the exact same long URL, I should not create duplicate DB entries.
  - [x] A longurl is case-sensitive, so http://hello.com is not the same as http://HELLO.COM.
- [ ] Create a POST endpoint for `/api/shorturl` which returns the original URL and some kind of value stored in mongodb (this is the short url).
- [ ] Create a GET endpoint for `/api/shorturl/<short_url>`
- [ ] Fetch longurl from DB if provided a shorturl from the user. Then, redirect them to that website.
- [x] Check longurl is valid format. Examples after my testing on their test website:
  - [x] http://www.example.com
  - [x] http://example.com
  - [x] https://example.com
- [x] Check longurl is invalid format. Examples after my testing on their test website:
  - [x] example.com
  - [x] www.example.com
- [ ] Check if a longurl with valid format is a valid URL (according to the hint from freecodecamp). I found some docs here: https://www.geeksforgeeks.org/node-js-dns-lookup-method/

# Frustrations

1. When wrapping `document.save();` with 'async' and 'await', it fails to save the document for some reason. Maybe there is a race condition where it saves before the db is even connected.
   1. I don't fully understand how 'async' and 'await' works.
   2. I never understood how `done` and `done(null, data)` worked in the first place. Seems like some callback (cb) functions are deprecated by mongoose. This makes it even more confusing for me.
2. I spent hours trying to figure out how to fetch a value from a document (the URL). I might have gotten close with query() and exec(), but I still don't know how to store it to a string variable.
3. I don't fully understand the documentation from mongoose. It has a lack of examples that fits what I am looking for.
