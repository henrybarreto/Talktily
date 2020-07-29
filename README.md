This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Talktily
**An anonymous chat.**

* This is an study case project to learn **Reactjs** and **Nodejs**. I've used the old style Class programming instead the new way with functions and Hooks,  **Typescript** to have a experience of types on JavaScript and other Node.js modules.

* **Sass**, css pre-processor, was thought to make building complex css easely, but no so used.

* An important secudary module was **Redux** and **React-Redux**, thought to be a store state to all app and share the information stored to "chat" and "lobby" components. In the future, it may be changed to *React Context Api*.

* I tried to use HTML5 tags and CSS3 BEM name styling.

* In my local machine, I tried to use **Git Flow** to organize my realeases and features.

# Specifications

It's simplely three view pages: *Home*,  *Enter* and *Chat*. *Home* and *Enter* was thought to be linked pages, to navigate between they.

*Enter* view page has a form which has three basic inputs, an username, a question if the user is older than 18 and if the user accept the application terms.

After submit the form, the data should be shared to the *Lobby* view page component which will, if everything goes okay, send the user to chat instance.

The lobby component shows an loading screen to user, while it, it'll conect, choose two random users and to put them talk.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
