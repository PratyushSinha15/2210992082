Numbers API Server This is a Node.js application that interacts with multiple external APIs to fetch different types of numbers (prime, Fibonacci, and even numbers), calculates the average of a rolling window of the most recent numbers, and provides the results.

Features Fetches prime numbers, Fibonacci numbers, or even numbers from external APIs.

Maintains a rolling window of the most recent numbers up to a defined limit (10).

Calculates and returns the average of the current window of numbers.

Handles API timeouts gracefully.

API Endpoints GET /numbers/:type Fetches numbers from external APIs and calculates the rolling average.

:type: Can be one of the following:

p: Prime numbers

f: Fibonacci numbers

e: Even numbers

Response Format: json Copy Edit { "windowPrevState": [previous state of the window], "windowCurrState": [current state of the window], "numbers": [numbers fetched from the API], "avg": [average of numbers in the current window] } GET / Returns a basic message confirming the server is running.

node app.js The server will be running at http://localhost:9876.

Error Handling If the type in the URL is invalid, the server will return a 400 status code with an error message.

If a request takes too long (more than 500ms), it will time out, and an error message will be returned.

If the API response contains invalid data, a 500 error will be returned.

Technologies Used Node.js

Express

Axios
