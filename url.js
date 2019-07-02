const url = require('url');

const fakeurl = "https://www.google.com/search?q=learn+node&oq=learn+node&aqs=chrome..69i57j0l5.75883j0j7&sourceid=chrome&ie=UTF-8";

const parsedURL = url.parse(fakeurl, true);

console.log(parsedURL.query);
console.log(parsedURL.query.token);