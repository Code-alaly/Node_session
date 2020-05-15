# Node_session
This week you will write a web application that will receive incoming POST and GET requests. You will write a single server to handle BOTH types of requests (i.e. the use the same URL). 

The server needs to do the following:

Upon receiving a POST request
"Render" a page that has a H1 tag displaying "POST Request Received"
Upon receiving a GET request
"Render" a page that has a H1 tag displaying "GET Request Received"
For both POST and GET
Below the H1 tag, create an HTML table that shows all parameter names and values which were sent in the URL query string for BOTH GET and POST (you can still send parameters in the URL when making POST requests)
For POST:
Below the URL parameter table, create another table that displays the property names and values that were received in the request body. Your server needs to be able to accept request bodies formatted as BOTH URL encoded query strings or JSON data.
