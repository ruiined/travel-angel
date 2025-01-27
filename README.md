# Travel Angel

[![Tests](https://github.com/adamwoodcock98/travel-angel/actions/workflows/testing.yml/badge.svg)](https://github.com/adamwoodcock98/travel-angel/actions/workflows/testing.yml)

Travel Angel is a MERN-stack web application used to safely and securely store travel documents.

## Team

[![Github Adam](https://img.shields.io/static/v1?label=GitHub&message=Adam%20Woodcock&color=ff69b4&logo=github)](https://github.com/adamwoodcock98)
[![Github Chris](<https://img.shields.io/static/v1?label=GitHub&message=Chris%20Lovell%20(BSc)&color=ff69b4&logo=github>)](https://github.com/clovellbsc)
[![Github Maria](https://img.shields.io/static/v1?label=GitHub&message=Maria%20Gromovaja&color=ff69b4&logo=github)](https://github.com/ruiined)
[![Github Kathleen](https://img.shields.io/static/v1?label=GitHub&message=Kathleen%20Ly&color=ff69b4&logo=github)](https://github.com/heykathl)
[![Github Dennis](https://img.shields.io/static/v1?label=GitHub&message=Dennis%20Houston&color=ff69b4&logo=github)](https://github.com/dennihous)
<br>[![Travel Angel](https://img.shields.io/static/v1?label=Travel&message=Angel&color=9cf)](https://travel-angel.herokuapp.com/)

## Technologies Used

### MERN Stack

- [MongoDB](https://www.mongodb.com/) - noSQL databse for storing collections.
- [Express](https://expressjs.com/) - Web framework for Node.js.
- [React](https://reactjs.org) - JavaScript library for building user interface.
- [Node.js](https://nodejs.dev/) - JavaScript run-time environment

### Other Notable Technologies

- [Mongoose](https://mongoosejs.com) - Object Data Mapper for MongoDB.
- [Nodemon](https://nodemon.io/) - reloads the server automatically on file-change (Not CSS though!).
- [Jest](https://jestjs.io/) - back-end unit testing.
- [React Testing Library](https://github.com/testing-library/react-testing-library/) - front-end unit testing.
- [Sketch](https://sketch.com/) - wireframing and mock-ups.
- [GitHub Actions](https://github.com/features/actions) - continuous integration and automated deployment

### Organisational Tools

- [Trello (Kanban Board)](https://trello.com/b/4lVhb0fA/travel-angel) - Kanban project board for managing tickets and observing workflow.
- Google Drive - Resources collection, and documentation of Team Charter and stand-ups/retros.
- Slack - messaging and visibility for GitHUb Pull Requests
- Zoom - Remote Pairing & Meetings

### Resources

- Slideshow Illustrations - [1](https://icons8.com/illustrations/illustration/fabulous-travel-3), [2](https://icons8.com/illustrations/illustration/experimental-air-travel-anywhere-in-the-world), [3](https://icons8.com/illustrations/illustration/cherry-680), [4](https://icons8.com/illustrations/illustration/fabulous-tour-search-1/), [5](https://icons8.com/illustrations/illustration/marginalia-autopilot-vehicle)
- [Passport Design](https://www.theguardian.com/uk-news/gallery/2015/nov/03/new-uk-passport-design-in-pictures)
- Icons - [Angel Heart](https://www.flaticon.com/free-icon/angel_3314947?term=heart%20angel&page=1&position=29&page=1&position=29&related_id=3314947&origin=search), [Wings](https://www.flaticon.com/premium-icon/wings_2108883)

## Video Demo
For a short demonstration of all the features Travel Angel has to offer, please watch the following video.

https://user-images.githubusercontent.com/74867241/173875311-b4b9a325-6b21-4ad4-8120-6fae4f81a445.mp4

## Team Approach

**Section on general approach**

---

# Setting Up

> Note: The following steps assume you have access to [Homebrew](https://brew.sh/)

### Pre-requisites

Install Node Version Manager (NVM)

```
brew install nvm
```

Then follow the instructions to update your `~/.bash_profile`.
Open a new terminal
Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `16.14.2`.

```
nvm install 16
```

### Set-up and Running of MongoDB on your local machine

Assuming that [homebrew](https://brew.sh/) is already installed:

```zsh
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
brew services list
```

The last command is checking that mongodb service has been started as a MacOS service, you should see something similar in your output

```zsh
Name              Status  User      File
mongodb-community started your-user ~/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```

### Cloning the Repository

Clone the repository to your local machine.

```
git clone https://github.com/adamwoodcock98/travel-angel
cd travel-angel
```

Once the repository has been cloned you will be able to install the dependencies from Node Package Manager.

```
cd server
npm install
cd ..
cd client
npm install
```

### Running the local server

```zsh
cd travel-angel
npm run start
```

Navigate to [localhost:3000](http://localhost:3000), or if you are having issues with DNS resolution [127.0.0.1:3000](http://127.0.0.1:3000).

### Testing the local server

```bash
cd travel-angel
npm run start:test # Starts the test server - which has a testing database so as not to interfere with devor production databases
npm lint # Pre-test linting to expose any formatting errors
npm test:unit # Unit Tests for isolated model functionality
npm test:integration # Integration tests of end-to-end functionality
```

Alternatively all three of the above commands (Linting, Unit, and Integration tests) can be chained by running `npm run test`


# Preview
![Trips](https://github.com/ruiined/travel-angel/blob/main/docs/gifs/travel_angel_trips.gif)
![Flights](https://github.com/ruiined/travel-angel/blob/main/docs/gifs/travel_angel_flights.gif)
