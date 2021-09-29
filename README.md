# Mobile Flashcards

Mobile Flashcards is a mobile application that allows users to study collections of flashcards. It allows users to create different categories of flashcards called "decks", add flashcards to those decks and then take quizzes on those decks.

It also creates daily reminders that remind users to take the quiz for that day if they haven't already.

### Table of contents

- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [To install dependencies run](#to-install-the-dependencies-run)
- [Starting the application](#starting-the-application)

### Dependencies

- [Node](https://nodejs.org/en/download/) - A Javascript runtime environment.
- [React Native](https://github.com/expo/create-react-native-app) - A Javascript library to create native apps for android and iOS using [React](https://reactjs.org).
- A package manager - [yarn](https://yarnpkg.com/lang/en/) or [NPM](https://www.npmjs.com/)

### Prerequisites

Clone the repository:

```
git clone https://github.com/Qadriyah/mobileflashcards.git
```

Then change to the project directory:

```
cd mobileflashcards
```

#### To install the dependencies run:

```
yarn install
```

This will install all the dependencies defined in the `package.json` file inside the project root directory.

### Starting the metro server

```
yarn start
```

### Running the application

#### On iOS

```
yarn run ios
```

#### On android

```
yarn run android
```

### Tested platforms

```
iOS 14
```
