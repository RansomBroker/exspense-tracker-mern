
exspense-tracker-mern
=======
This Project was Develop with MERN stack, for me learn how MERN work
i watch this tutorial from [Traversy Media](https://www.youtube.com/watch?v=KyWaXA_NvT0) in youtube thanks for Traversy Media :) it was good learning, and this project i was build

## Available Scripts

In the project directory, you can run:
### `yarn start`

The page will reload if you make edits.<br/>
You will also see any lint errors in the console.

if you want developing react and node in one time you can run:<br/>
`yarn dev`

and you can type in browser

    http://localhost:5000 #using port 5000

you need connect to your mongo db, there have `config.env` you can change or add `MONGO_URI`

`/config/config.env`

and also you can change `PORT` and  `NODE_ENV`

`NODE_ENV` some type `production` when you deploy it or `development` when you develop this project

if you change `PORT` u need several change in 
`./client/package.json in 'proxy' line` 
then in `server.js`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


