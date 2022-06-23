# ShopCart Backend Nodejs with Express

## Install dependencies 
```
npm install
```

## Run project DEV
```
npm run dev
```

## Run project PROD
```
node src/index.js
```

## Planet Scale
- register planet scale
- create database
- schema for console execute scripts
- describe table
- for connection  view details credentials
- generate new password

## Heroku
- register
- create project
- install heroku cli 
- heroku login
    ```
    heroku login
    ```
- added Procfile and engines in package.json
    ```
    Procfile
    web: node app/src/index.js
    ```

    ```
    package.json
    "engines": {
        "node": "16.15.1"
    },
    ```
- configure environment variables in Heroku
    ```
    heroku config:set SESSION_AUTHENTICATION_KEY="<string of any length>"
    ```
- added remote github heroku and push
    ```
    heroku git:remote -a name-project
    git add -A
    git push heroku master
    ```
    