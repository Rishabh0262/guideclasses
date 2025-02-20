# Guide Classes

## *********** Sec 2 : Client setup *************

>npm run dev

## Client
    We'll be using the Next.js framework for frontend with React.js

    1.  setup project. Initialise with NPM.
        `$ npm init -y`

    2.  Manual setup(next.js - Docs) : to install 'next' , 'react' , 'react-dom'
        `$ npm install next react react-dom `
        `$ npm install next@latest react@latest react-dom@latest`

        2.2 adding "scripts" in package.json... as directed by the Docs

### pages
    Just create the component and return. It'll route on its own. As it is already present in the "pages" folder.

    3.  Create a 'pages' directory [It's required for the next.js to work.]
        fill in with the components
            3.1 index.js is default.
            3.2 rest the pages will be routed as "localhost:3000/page_name" [e.g. : register.js, login.js]

    4. `$ npm run dev`  : It will render at "localhost:3000"


#### _app.js   ^
    For the things that we want to make it avialable for the entire App.   
        *   Next.js uses the App Component to initialize pages.  
        *   This app component runs before any page gets ready for users to see.  
        *   This is a perfect place to add your bootstrap css so that it is abailable for the entire app  
        *   IMPORTANT - restart the server.  

        5. create "_app.js" : a Next.js internal file. To override it.
            usually for Bootstrap css

        6. `$ npm i bootstrap`
        7. `$ npm i antd` : Ant Design - similar to MUI (complicated) 


        8. We have included the libraries we installed just now. In _app.js file.
            8.1 : Now where ever we want to use the css. We can just include the className in the "className" tag. As in Bootstrap in HTML tags.

            8.2 : 

### public
    Folder for CSS or images work, etc.

        9. css folder. => create styles.css   : for the custom-css.
            & import it to "_app.js"

        

### components
    folder for components (not like pages in "page" for the routing purpose)

        10. TopNav.js : we want to make it available for the entire 

            10.2 : add the component to the _app.js file in "pages". So that as we need TopNav in every page of the website commonly.


#### Using the "antd" ant-design & "Link" from "next/link" (next.js)

            10.3 : we've used  <Menu><Item><Link>...</Link></Item></Menu>
                for the suitable way of using the UI



        11. Completed the "Register" page from 'pages/register.js' 

***** **goto -> sec 3 server** *****
     
#### From server ... [## -- FE & BE connection using Axios. --]

12. register.js
    1.  Using **axios** We'll sent the Form response to BE using POST req.
    2.  We'll be receiving all the data in the BE register API. REST-API's post router for register will be receiving all the data.








---
---
---
---
## *********** Sec 3 : Server setup *************

## server

    1. setup server. Initialise with NPM.
        `$ npm init -y`

    2. installing the dependencies requiered for the Backend.
        `$ npm i express mongoose cors dotenv nodemon esm jsonwebtoken bcrypt morgan`

            express     : to build server. 
            mongoose    : to interact with MongoDB
            cors        : to communicate front-end & back-end [client & server]
            dotenv      : to use "Environment variables" 
            nodemon     : Helps in continuously running the server.
            esm         : Help in Import/Export syntax. (not availabe in node)
            jsonwebtoken : to create tokens, that will exchange between the client-server  for authentication.
            bcrypt      : to hash the password.         user's password => [Hash] => DataBase
            morgan      : see getting what kind of endpoint we're getting request. We get all the endpoint in the console. HELPs in Dubugging.


### server.js  ^
The entry point of our server. 
for all the routes/controller functions/etc . So all of them are imported in this file.  

This will be the entry point. This file will be executed.

1. package.json : adding "scripts" in package.json... as follow 
                    `"start" : "nodemon -r esm server.js"`


2. server.js^   : We right initial server setup.

3.  ".env"      : for environment variables.

4. `$ npm start` 


### routes 
to handle all the "routes"/"endpoints". In future we'll be having many routes & many diff. files.
Each time I won't like to 'import files manually & apply as a middleware.

**auth.js** : Authentication related routes. We've defined the endpoints.   
_**e.g.**_ : "/register" - though we've used a prefix  in *** // route *** in "server.js".
             That's why to access this we have to hit
             
                 http://localhost:8000/api/register

1. We've used **express.Router()** instance to use **router.get()**
2. Now this .get()/.post() will have do the routing thing.

3. 
4. 



### controllers
to make the file neat and simple. Keeping code more organised.


Taking the 2nd argument and returning it as the function. from the "controllers"
* in place of that, **function-name** is written which is being imported from the *controller*   containing that function. 

* Function name should be exported from the controller. ( >1 functions can be exported from 1 controller.)

* *contorller-name* will be ***same*** as the *route-name* .
  +-
        

## -- Mongoose connect --
    We've added the required code to the ".env" file. Regarding this.

<!-- we faced an issue -->

## -- PostgreSQL --

Using pg-admin we've created the "guideclasses" DB.
We've configured the required configurations in ***server.js*** file





## -- FE & BE connection using Axios. --
    
    1. client
        `$ npm i axios`

        [refer] ## Client for more ... [after 11]





---
---
---
---
## *********** Sec 4 : Registration *************








---
---
---
---
## *********** Sec 5 : Login *************








---
---
---
---
## *********** Sec 6 : Global state, CSRF, axios interceptors & protecte... *************








---
---
---
---
## *********** Sec 7 : AWS IAM *************








---
---
---
---
## *********** Sec 8 : Sending email & password reset *************








---
---
---
---
## *********** Sec 9 : Stripe onboarding *************








---
---
---
---
## *********** Sec 10 : Current instructor & protected routes *************








---
---
---
---
## *********** Sec 11 : Create course *************








---
---
---
---
## *********** Sec 12 : AWS S3 Image upload *************








---
---
---
---
## *********** Sec 13 : Save course and instructor access *************








---
---
---
---
## *********** Sec 14 : AWS S3 Video upload and lessons  *************








---
---
---
---
## *********** Sec 15 : Update course, lessongs & rearrange *************








---
---
---
---
## *********** Sec 16 : Lesson update & delete *************








---
---
---
---
## *********** Sec 17 : Publishing courses *************








---
---
---
---
## *********** Sec 18 : Single course view and SEO *************








---
---
---
---
## *********** Sec 19 : Free enrollment *************








---
---
---
---
## *********** Sec 20 : Paid enrollment *************








---
---
---
---
## *********** Sec 21 : User courses and student route *************








---
---
---
---
## *********** Sec 22 : User course dashboard *************








---
---
---
---
## *********** Sec 23 : Istructor dashboard *************








---
---
---
---
## *********** Sec 24 : Deployment *************








---
---
---
---
---
---
---
---













    

^ : In a file means, the file contains some TEXTs that explains the usage.