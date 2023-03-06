## Project Zap Recall

<img width="1440" alt="Captura de Tela 2023-03-06 às 15 43 29" src="https://user-images.githubusercontent.com/95102911/223201905-e4f44d40-9924-49c6-a51f-64c69f4c4768.png">

<img width="1440" alt="Captura de Tela 2023-03-06 às 15 44 54" src="https://user-images.githubusercontent.com/95102911/223202203-593efdaf-322e-42bd-9a22-9221efbe2b40.png">

______

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

_____

# ✅ Requirements

- *General*
     - [ ] Manipulate the HTML using only React (no document, localStorage, ****or React libraries, JavaScript and/or CSS).
     - [ ] All information storage must be done via states.
     - [ ] Your project must be developed using Git and GitHub.
     - [ ] For each implemented requirement make a *commit* with a descriptive message of what you have evolved. If you want to split a requirement into multiple *commits*, no problem. But avoid putting more than one requirement in the same *commit*.
     - [ ] In this project, styling must be done with styled-components obligatorily.
     - [ ] The *deploy* of the application using Vercel is also mandatory.
     - [ ] *It is not allowed to use `Context` or `Router`!*
    
- *Layout*
     - [ ] Apply *layout* following Figma.
     - [ ] You can use any *deck* you want, here's an example of a *deck* on React:
         1. **Q:** What is JSX? **A:** A JavaScript language extension
         2. **Q:** React is __ **R:** a JavaScript library for building interfaces
         3. **Q:** Components must start with __ **R:** capital letter
         4. **Q:** Can we put __ inside JSX **R:** expressions
         5. **Q:** ReactDOM helps us __ **R:** interacting with the DOM to place React components in it
         6. **Q:** We use npm to __ **R:** manage the required packages and their dependencies
         7. **Q:** We use props to __ **R:** pass different information to components
         8. **Q:** We use state to __ **R:** tell React which information when updated should render the screen again
         - In object format
            
             ``` jsx
             const cards = [
             { question: "What is JSX?", answer: "A JavaScript language extension" },
             { question: "React is __", answer: "A JavaScript library for building interfaces" },
             { question: "Components must start with __", answer: "Capital letter" },
             { question: "Can we put __ inside JSX", answer: "expressions" },
             { question: "The ReactDOM helps us __", answer: "Interacting with the DOM to place React components in it" },
             { question: "We use npm for __", answer: "Manage required packages and their dependencies" },
             { question: "We use props for __", answer: "Passing different information to components" },
             { question: "We use state for __", answer: "Tell React which information when updated should render the screen again" }
             ]
             ```
            
     - [ ] Use the fonts indicated in the Figma Layout.
- *Componentization and data*
     - [ ] Page elements must be componentized with React in separate files.
     - [ ] The dynamic data of the page (such as *deck*, *flashcards*, etc) must be represented as *arrays* or objects in JavaScript and rendered on screen.
- *Flashcards*
     - [ ] All *flashcards* must appear on the screen turned over and indexed by numbers (eg Question 1, Question 2), in order to “hide” the term or question it contains.
     - [ ] When clicking on the “play” arrow of a *flashcard*, the question or term corresponding to the *flashcard* should appear (no animation required).
     - [ ] To see the *flashcard* response, the user must click on the “turn” icon (the component is the same, just had its *layout* adapted).
         - By flipping a *flashcard*...
             - [ ] The user must see the correct answer to the question and the three buttons (Didn't remember, Almost didn't remember or Zap).
             - [ ] When clicking on any of the buttons, the *flashcard* must be given as answered and will have its status changed to reflect the user's choice:
                 - Incorrect *Flashcard* (I didn't remember)
                 - *Flashcard* correct with effort (Almost didn't remember)
                 - *Flashcard* correct immediately (Zap!)
             - [ ] Once answered, the question must be closed and its text struck through with the correct color corresponding to its status and an icon. It cannot be opened again.
- *Completion counter*
     - [ ] The counter should show how many questions the user has already answered and how many questions there are in total.
     - [ ] Whenever a card is answered (click on the buttons), the number of flashcards answered must be updated.
     - [ ] The number of answered flashcards can never be greater than the total number.
