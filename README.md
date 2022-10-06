
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
You can switch from mocked data to API data in your `.env`.

```bash
# .env / default value / API data
REACT_APP_MOCK_ACTIVE=false
#.env / Mock Data
REACT_APP_MOCK_ACTIVE=true
```


### Endpoints 
This project includes four endpoints that you will be able to use:

- http://localhost:3001/ - Home page 
- http://localhost:3001/{userId} - Dashboard page with all the charts for this user




