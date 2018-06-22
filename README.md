# Budget Manager


## Development server Front-End

Run `npm install`.

Run `npm run start` for a dev server. Navigate to `http://localhost:4000/`.
The app will automatically reload if you change any of the source files.


## Development server Back-End

Run `npm install` in back-end folder.

Create account at https://mlab.com.

Create Mongo DB database. 

Create folder "config" in back-end folder.

Create config.json file in back-end/config folder with next structure:
```
{
  "uname": "YOUR USER NAME HERE",
  "pwd": "YOUR PASSWORD HERE"
}
```

Create index.js file in back-end/config folder with next structure: 
```
var configValues = require('./config');

module.exports = {
  
  getDbConnectionString: function() {
    const { uname, pwd } = configValues;
    // get your DB URI - go to https://mlab.com/databases/your-database
    // find next text:
    // "To connect using a driver via the standard MongoDB URI (what's this?):"
    //    *** >>> your DB link HERE <<< ***
    return `your DB link`;
    // example:
    // return `mongodb://${uname}:${pwd}@ds054479.mlab.com:54479/your-database`;
  }
  
}
```

Install nodemon - `npm install -g nodemon`.

Run `nodemon app.js`
