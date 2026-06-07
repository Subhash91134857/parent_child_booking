# Sportomic Arena Booking Availability Engine

A React-based implementation of the Sportomic Technical Assignment that models court availability using a **Conflict Graph** data structure.

## Problem Statement

A single physical turf can be configured as:

### 7v7 Configuration

* 7v7-A
* 7v7-B

### 5v5 Configuration

* 5v5-1
* 5v5-2
* 5v5-3

These courts share the same physical space. Therefore, booking one court may make other courts unavailable.

The goal is to build an availability engine that determines:

* Booked Courts
* Blocked Courts
* Available Courts

for any booking combination.

---

## Solution Approach

### Conflict Graph

Each court is represented as a node.

Physical overlaps are represented as graph edges.

```text
5v5-1 ─────── 7v7-A
                │
5v5-2 ──────────┤
                │
            7v7-B ─────── 5v5-3
```

### Overlap Mapping

| Court | Overlaps With |
| ----- | ------------- |
| 5v5-1 | 7v7-A         |
| 5v5-2 | 7v7-A, 7v7-B  |
| 5v5-3 | 7v7-B         |
| 7v7-A | 5v5-1, 5v5-2  |
| 7v7-B | 5v5-2, 5v5-3  |

---

## Algorithm

1. Accept selected courts as booked courts.
2. Traverse graph relationships.
3. Mark connected courts as blocked.
4. Calculate available courts.

```text
Available Courts =
All Courts
- Booked Courts
- Blocked Courts
```

5. Return:

   * Booked Courts
   * Blocked Courts
   * Available Courts

---

## Example

### Input

```javascript
["5v5-1"]
```

### Output

```javascript
{
  booked: ["5v5-1"],
  blocked: ["7v7-A"],
  available: [
    "5v5-2",
    "5v5-3",
    "7v7-B"
  ]
}
```

---

## Assignment Rule Verification

### Rule 1

Input:

```javascript
["5v5-1"]
```

Output:

```text
Blocked: 7v7-A
Available: 5v5-2, 5v5-3, 7v7-B
```

---

### Rule 2

Input:

```javascript
["7v7-A"]
```

Output:

```text
Blocked: 5v5-1, 5v5-2
Available: 5v5-3, 7v7-B
```

---

### Rule 3

Input:

```javascript
["5v5-1", "5v5-2"]
```

Output:

```text
Blocked: 7v7-A, 7v7-B
Available: 5v5-3
```

---

### Rule 4

Input:

```javascript
["7v7-A", "7v7-B"]
```

Output:

```text
Blocked: 5v5-1, 5v5-2, 5v5-3
Available: None
```

---

## Edge Case

### Middle Court Cascade

The middle court (5v5-2) overlaps both 7v7 courts.

Input:

```javascript
["5v5-2"]
```

Output:

```text
Blocked:
7v7-A
7v7-B

Available:
5v5-1
5v5-3
```

This behavior is automatically handled by the graph structure without requiring special business rules.

---

## Project Structure

```text
src/
│
├── components/
│   └── CourtCard.jsx
│
├── data/
│   └── data.js
│
├── AvailabilityEngine.js
│
├── App.jsx
│
├── App.css
│
└── index.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move to project directory:

```bash
cd sportomic-booking-engine
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

---

## Available Scripts

### `npm start`

Runs the application in development mode.

### `npm test`

Launches the test runner.

### `npm run build`

Creates a production build in the `build` folder.

### `npm run eject`

Removes Create React App abstraction and exposes configuration files.

---

## Complexity Analysis

Let:

* N = Number of Courts
* E = Number of Overlap Relationships

### Time Complexity

```text
O(E)
```

### Space Complexity

```text
O(N + E)
```

---

## Future Improvements

* Time-slot based bookings
* Multi-venue support
* Database persistence
* Admin dashboard
* Booking history
* Interval-based physical space modeling
* Dynamic venue configuration

---

## Tech Stack

* React
* JavaScript (ES6+)
* Conflict Graph Data Structure
* CSS

---

## Author

**Subhash Kumar**

Software Developer Technical Assignment Submission for Sportomic.
