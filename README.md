# Pikapika

<p align="center">
  <img src="https://github.com/lijiaxingogo/ideal-parakeet/blob/main/gif/demo.gif" />
</p>

## Installation

1. Clone the repo

```sh
git clone https://github.com/lijiaxingogo/ideal-parakeet.git
```

2. Set enviornment variable for frontend and backend

```sh
cd frontend
touch .env
```

Please add<br/>
REACT_APP_SERVER = 'http://localhost:4000/pokemon'<br/>
in .env file.<br/>

```sh
cd server
touch .env
```

Please add<br/>
PORT=4000<br/>
FRONTEND="http://localhost:3000"<br/>
SERVER="http://localhost:4000"<br/>
in .env file.<br/>

3. NPM Install: <br/>
   Start frontend(please make sure port 3000 is available):

```sh
cd frontend
npm i
npm run start
```

Go to http://localhost:3000/ on your browser.<br/>
Start backend:

```sh
cd backend
npm i
npm run dev
```

3. Run test:

```sh
cd backend
npm run test
```

## Data Source

https://pokeapi.co/

Free feel to contact me at jiaxin.li.gogo@gmail.com for any issues. Thank you!
