This Node.js microservice fetches user data and posts from an external API, processes it, and provides endpoints to retrieve the most active users and popular or latest posts.

Features Top Users by Comment Count: Fetches users from the external API and calculates the total number of comments on each user's posts, returning the top 5 users with the highest comment counts.

Posts by Popularity or Recency: Fetches posts from all users and allows you to filter them by the number of comments (most popular) or by the latest timestamp.

API Endpoints GET /users Fetches the top 5 users based on the number of comments on their posts.

Response Format: json Copy Edit { "topUsers": [ { "userId": "1", "name": "John Doe", "totalComments": 120 }, { "userId": "2", "name": "Jane Doe", "totalComments": 110 }, ... ] } GET /posts?type=popular Fetches posts ordered by the number of comments. Returns the posts with the highest number of comments.

Query Parameters: type: Can be either popular or latest.

Response Format (for popular posts): json Copy Edit { "posts": [ { "id": 1, "userid": 1, "content": "This is a popular post", "comments": [...], "timestamp": "2021-12-01T00:00:00Z" }, ... ] } GET /posts?type=latest Fetches the latest posts, sorted by timestamp.

Response Format (for latest posts): json Copy Edit { "posts": [ { "id": 3, "userid": 2, "content": "This is a recent post", "comments": [...], "timestamp": "2021-12-10T00:00:00Z" }, ... ] } The microservice will be available at http://localhost:3000.

Error Handling If the type in the /posts request is not popular or latest, a 400 status code with an error message will be returned.

If any error occurs during the fetching of users or posts, a 500 status code with an error message will be returned.

![q2 1](https://github.com/user-attachments/assets/77706983-5981-47b9-89c1-25ce607302b7)

![q2 2](https://github.com/user-attachments/assets/44c36be8-1f8d-4833-87b4-4960eaea2e01)

![q2 3](https://github.com/user-attachments/assets/542279f4-2c6d-405e-9ec1-ac370fa050fa)
