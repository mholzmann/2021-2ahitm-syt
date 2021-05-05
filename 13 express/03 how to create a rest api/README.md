# How to create a REST API

Representational state transfer (REST) is a software architectural style for creating web services. API means "Application Programming Interface".

## Request to REST Server

A RESTful web service request contains:

1. **An Endpoint URL:** An application implementing a RESTful API will define one or more URL endpoints with a domain, port, path, and/or querystring — for example, https://mydomain/api/users/123.

2. **The HTTP method:** Differing HTTP methods can be used on any endpoint which map to application create, read, update, and delete (CRUD) operations:

    HTTP method | CRUD | Action
    :-----------|:-----|:------
    GET | read | returns requested data
    POST | create | creates a new record
    PUT or PATCH | update | updates an existing record
    DELETE | delete | deletes an existing record

    **Examples:**
    - a GET request to `/api/users/` returns a list of registered users on a system
    - a GET request to `/api/users/123` returns the user with id 123
    - a POST request to `/api/users/` creates and returns a new user
    - a PUT request to `/api/users/123` updates user 123 with the body data
    - a DELETE request to `/api/users/123` deletes the user 123

3. **HTTP headers:** Information such as authentication tokens or cookies can be contained in the HTTP request header.

4. **Body Data:** Data is normally transmitted in the HTTP body in an identical way to HTML \<form> submissions or by sending a single JSON-encoded data string.

## Response from REST Server

The response payload can be whatever is practical: data, HTML, an image, an audio file, and so on. Data responses are usually JSON-encoded.

An appropriate HTTP status code should also be set in the response header. **200 OK** is most often used for successful requests, although **201 Created** may also be returned when a record is created. If the response body is empty the service returns **204 No Content**. Errors should return an appropriate code such as **400 Bad Request**, **401 Unauthorized**, **404 Not Found** and so on.

Other HTTP headers can be set including the Cache-Control or Expires directives to specify how long a response can be cached before it’s considered stale.

## Example for REST Server
See `app.js` and `/routes/tasks.js`.

## Example for REST Client
Enter `npm app` in console and open http://localhost:3000.