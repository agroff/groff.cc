/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';
import expressNunjucks from 'express-nunjucks';

// Import WelcomeController from controllers entry point
import {MainController} from './controllers';


// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
//const port: string = process.env.PORT || "3000";
const port: string =  "3000";

app.set('view engine', 'njk');
app.set('views', __dirname + '/templates');

const njk = expressNunjucks(app, {
    watch: true,
    noCache: true
});

// Mount the WelcomeController at the /welcome route
app.use('/', MainController);
app.use(express.static('build/public'));

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});