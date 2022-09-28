
# SportSee

## Getting Started
### Prerequisites

- [Node.js v16](https://nodejs.org/en/)

```bash
# Check Node.js version
node --version
```

### Instructions
1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install
# Start local dev server
npm start
# Build the app for production
npm run build

```
## Switch from MockData to API-Data
You can switch from mocked data to API data. For that, you can change in your .env REACT_APP_MOCK_ACTIVE.
By default it is set to 'false'.

### Endpoints 
This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

