# Movies Browser

## Demo

[Link to the main page of Movies Browser](https://sofyahreksoftware.github.io/movies-browser/#/movies?page=1)

## Description

Our **Movies Browser** offers access to _500 pages of popular movies and people_, with 20 movie/person tiles on each page.
Each **Movie tile** _links to a movie page_.
**The movie pages** _include comprehensive information about movies_ such as production location, release date, vote count, rating out of 10, and a description. Additionally, there are sections for the cast and crew, each composed of **tiles** that _link to individual person pages_.
**The person pages** include information about the date and place of birth, a short autobiography, a list of films in which the person has appeared either in the cast or as part of the crew.
We also have on our page a **list of persons** related to cinematography, also composed of **tiles** that _link to individual person pages_.
A top-level **navigation menu** enables users to _switch between the movie list and the person list_.
A dedicated **search engine** to _search for movies on the movie list movies on the movie list page and persons on the person list page_.
A bottom-level **pagination** enables _moving between pages of movie list or person list_.

## Key Features in Action

![Movie List](src/assets/movieList.gif)
![People List](src/assets/peopleList.gif)
![Movie Page](src/assets/moviePage.gif)
![Person Page](src/assets/personPage.gif)
![Navigation](src/assets/navigation.gif)
![Pagintion](src/assets/pagination.gif)
![Search](src/assets/search.gif)

## Technologies

### HTML

- HTML5: Leveraging the latest HTML standards for structure and semantics.
- Accessibility: Implementing ARIA roles and semantic HTML to enhance accessibility.
- Open Graph Protocol
- Google Fonts

### JavaScript & Frameworks

_Core Technologies_

- **React** - for building the user interface, emphasizing reusable components
- **ReactDOM** - for rendering of React components in the DOM
- **Webpack** - for compiling and bundling JavaScript modules
- **Babel** - for transforming ES6+ JavaScript into a backwards-compatible version
- **PostCSS** - for transforming CSS with JavaScript plugins

_State Management_

- **Redux Toolkit** - for efficient Redux development with optimized state management
- createSlice
- configureStore
- **React-Redux** - for integrating Redux with React to manage application state.
- Provider
- useSelector
- useDispatch

_Utilities and Hooks_

- **fetch** with **async/await** and **Error Handling** - for asyncronious data fetching
- **nanoid** - for generating unique identifiers
- **useEffect** Hook - for performing side effects in functional components
- **URLSearchParams** - for manipulating URL parameters

_Routing_

- **react-router-dom** - for handling routing
- Hashrouter
- Route
- Link, Navlink
- route params
- useNavigate, useParams, useLocation

## Additional information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
