### Backend Development
Issue the following once
```
cd backend
npm install
```
Do some development then start the server to check your work
```
npm test
npm start

// you can access the API at http://localhost:3000
```
Example API calls
```
http://localhost:3000/prezis/56f137f46ba885ffacf4d3ff
http://localhost:3000/prezis?search=commodo&orderBy=createdAt&descending=true
```

### Frontend Development

Issue the following once

```
cd frontend
npm install
```

Start watch mode for easier development
```
npm run watch
```

Do some development then you can instantly check your changes in the browser
```
open the app/index.html in your browser then just refresh the page
```

### Heroku Deploys

#### Backend
You can find the running live backend here [link](https://quiet-island-87638.herokuapp.com/)

Example API calls
```
https://quiet-island-87638.herokuapp.com/prezis/56f137f46ba885ffacf4d3ff
https://quiet-island-87638.herokuapp.com/prezis?search=commodo&orderBy=createdAt&descending=true
```

#### Frontend
You can find the running live frontend here [link](https://shrouded-beyond-26595.herokuapp.com/app/)

### Further Ideas

 - add some pagination solution for quicker page load and rendering
 - design refinements
 - better sort by solution
 - advanced search functionality, search in everywhere not just in the title
 - add/modify/remove/view prezi functionalities
 - rating prezis, favourites, top, etc.
 - facebook, twitter, ... integration
 - user profiles regular and admin
