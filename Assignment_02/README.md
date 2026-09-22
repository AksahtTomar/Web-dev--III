# Student Management REST API

Lab Assignment 2 — Web Dev III (Node.js & Express Backend), Unit 2.

A simple REST API built with **Express.js** to manage student records
(CRUD) using an in-memory array — no database, no Mongoose.

## Tech Stack
- Node.js
- Express.js
- Postman (for testing)

## Project Structure
```
student-management-api/
├── app.js                 # server entry point
├── data/
│   └── students.js        # in-memory array acting as the "DB"
├── middleware/
│   └── logger.js           # custom logger middleware
├── routes/
│   └── studentRoutes.js    # modular router (all /students routes)
├── package.json
└── README.md
```

## Setup & Run

```bash
npm install
node app.js
```

Server starts at: `http://localhost:3000`

## API Endpoints

| Method | Endpoint          | Description              | Body (JSON)                          |
|--------|-------------------|---------------------------|----------------------------------------|
| GET    | /students         | Get all students          | —                                       |
| GET    | /students/:id     | Get one student by id     | —                                       |
| POST   | /students         | Create a new student      | `{ "name": "...", "course": "...", "age": 20 }` |
| PUT    | /students/:id     | Update an existing student| any of `name`, `course`, `age`          |
| DELETE | /students/:id     | Delete a student           | —                                       |

## Status Codes Used
- `200` Success
- `201` Created
- `400` Bad Request (missing/invalid fields, bad id)
- `404` Not Found (student or route doesn't exist)
- `500` Internal Server Error (unexpected failures)

## Example Requests (curl)

Create:
```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Sneha","course":"BSc","age":20}'
```

Update:
```bash
curl -X PUT http://localhost:3000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"age":22}'
```

Delete:
```bash
curl -X DELETE http://localhost:3000/students/2
```

A ready-to-import Postman collection is included as
`Student_Management_API.postman_collection.json`.

## Notes
- Data resets every time the server restarts (in-memory only, as required by the assignment).
- Custom logger middleware prints `[timestamp] METHOD /url` for every request to the console.
