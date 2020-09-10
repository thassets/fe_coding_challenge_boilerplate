# Trade Hounds coding challenge

Thanks for taking the time to share your React Native expertise with us! The point of this test is to help us get an understanding of how you approach architecting a react/redux application and is designed to be completed in four hours.

At a high level, you will be building a simple tradehounds-style dog photo feed with the ability to like dogs with a thumbs up button. We will be using the [Dog API](https://docs.thedogapi.com/), and likes will be saved to a username derived from $(whoami).

Once completed, we will meet to talk about your approach and talk about future optimizations you would made given extra time.

#### Environment 
The application is managed by [expo](https://docs.expo.io/), and the only dependency you should need to install is the [expo-cli](https://docs.expo.io/workflow/expo-cli/). Alternatively, you can use the expo snack online editor and develop remotely while still being able to see live changes to the app in the online simulators.

Javascript apps built with expo are designed to run on both native and web, so you have the option of viewing your code changes in either a web or mobile context. The expo syntax is still react-native though, so you use `<View />`, `<Text />`, etc. Read below for instructions on how to launch the app in either context.

#### Getting Started
The following dependencies are pre-installed:
- axios
- redux
- redux-thunk
- react-native-svg
- redux-devtools-extension (you must configure the middleware yourself)
- react-redux

Should you need to install additional dependencies, just `npm install` as usual. If you're using the online editor, just add to the package.json. There shouldn't be any need for native module linking for this challenge.

###### Local development (recommended)
- To work locally using your own editor, install the [expo-cli](https://docs.expo.io/workflow/expo-cli/) (the app was build with the latest version, v3.26.2): `npm install -g expo-cli`
- Clone the repository: `git clone https://github.com/tradehounds/fe_coding_challenge_boilerplate.git`
- Install node dependencies: `npm install`
- From here, you can run on a local mobile simulator or local browser - it's totally up to you. Just take a look at the package.json scripts for ios, android, and web options.
- Assuming you have set up redux dev tools (store configuration instructions [here](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)), you can download the [redux devtools browser extension](https://github.com/reduxjs/redux-devtools) to view your state and actions.
###### Remote development
- To work using the online expo snack editor, navigate to snack.expo.io and on the left column (near "Project"), click the vertical ellipses and import this git repository (no need for anything under "advanced options"): https://github.com/tradehounds/fe_coding_challenge_boilerplate.git
- The app should launch immediately. We recommend disabling "Update as you type" in the bottom right corner of the expo snack editor under "Devices". If you want to avoid the pop up every time you save, create an expo account (this is why we recommend local development).

#### Requirements
As a user, I want to be able to:
- **See a loading state when I launch the app while data is being fetched**
  - Note: `getFeedData` and `postFavorite` API request requests are already provided.
- **See random dogs and their stats once redux state has been hydrated**
  - Hint: `<Post />` component is already provided for you.
  - Note: pagination is not required. 100 posts will render by default.
- **Like a dog by clicking the like button and POST that like to the Dog API**
  - Note: any Post UI updates should occur [optimistically](https://blog.bitsrc.io/building-an-optimistic-user-interface-in-react-b943656e75e3) here. In other words, you shouldn't have to wait for the POST /likes request to resolve to see a filled in heart icon.
- **Only the liked dog's Post component should re-render when the heart icon is clicked**
  - Hint: uncomment `console.log('<Post /> re-rendering')` in the Post component to test this 
#### Submitting
- Once finished, please compress your project (or download as zip if working on snack.expo.io) and email it to drew@tradehounds.com. From there, we'll follow up with a time to discuss the submission and talk about improvements you may have made given more time.
- If you were developing locally, feel free to uninstall to expo-cli: `npm uninstall -g expo-cli`.