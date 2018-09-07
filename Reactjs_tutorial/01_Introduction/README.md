### Introduction and setup.

**React.js** is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps.

**create-react-app** tool is a good and simple way to start building single page web applications using React.js.

Run below command to install the **create-react-app** tool.
```sh
npm i create-react-app
```

Run the below commands to create React.js app
```sh
$ create-react-app gallery-app
$ cd gallery-app
$ npm start
```

That's it. Now open http://localhost:3000/ to see the app running.

**npm start** by default runs the application on port no. 3000. 

To change the **port no.** update the **start** property in **script** section of **package.json** file as mentioned below.
````sh
"start": "PORT=3001 react-scripts start"
````

Now stopping and restarting the app with npm start will run the application on port no 3001.
