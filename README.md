# School Management API

## Overview

This project is built using Node.js, Express.js, and MySQL.

It allows users to:

- Add new schools
- Fetch schools sorted by proximity to the user's location

---

## Tech Stack

- Node.js
- Express.js
- MySQL

---

## Database Table

Table: schools

Fields:

- id
- name
- address
- latitude
- longitude

---

## API Endpoints

### 1. Add School

Endpoint:
POST /addSchool

Sample Request:
{
"name": "ABC School",
"address": "Pune",
"latitude": 18.5204,
"longitude": 73.8567
}

---

### 2. List Schools

Endpoint:
GET /listSchools?latitude=18.52&longitude=73.85

Returns schools sorted by distance.

---

## Run Locally

Install dependencies:
npm install

Run server:
node app.js
