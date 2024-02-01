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

1. Connect to a live mongodb instance.
2. Create database records and save them to mongodb (POST).
   1. If the user POSTs for the exact same long URL, I should not create duplicate DB entries.
   2. A longurl is case-sensitive, so http://hello.com is not the same as http://HELLO.COM.
3. Fetch longurl from DB if provided a shorturl from the user. Then, redirect them to that website.
4. Check longurl is valid format. Examples after my testing on their test website:
   1. http://www.example.com
   2. http://example.com
   3. https://example.com
5. Check longurl is invalid format. Examples after my testing on their test website:
   1. example.com
   2. www.example.com
6. Check if a longurl with valid format is a valid URL (according to the hint from freecodecamp). I found some docs here: https://www.geeksforgeeks.org/node-js-dns-lookup-method/