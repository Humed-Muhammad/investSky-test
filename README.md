# expo-boilerplate

## Created By Humed Muhammad Essie

This boilerplate is  Created By expo based react native boilerplate and template generator.

The owner of the boilerplate [Humed Muhammad](https://github.com/Humed-Muhammad)

More info on the boilerplate [Setup-Expo npm Package](https://www.npmjs.com/package/setup-expo)

It has some scaffolding using generators to help you speed up your development and come with pre configure features listed below:-

# Features

- 🚸 Choose your favorite package manager

- ✨ Choose navigation style

- 🚀 TypeScript

- 👌 Localization

- 👥 Pre configured theme

- 💄 Styled-components and Style system

- 💫 Dark and light Mode

- 📝 Generators (slice, components, and screens)

- 🌳 Redux with toolkit

- 🔖 SWR for api calls

- 🦺 Lazy load slice with Redux injectors and component


# Contribution 
Open to contributers, lets make this boilerplate the go to go for any expo projects. 

## How to run the application

### Clone the project
- Run the following command
```cmd
git clone https://github.com/Humed-Muhammad/investSky-test
```
- Make sure you have expo-cli if not run the following command

```cmd
npm install -g expo-cli
```
- The CD to project

```cmd
cd investSky-test
```

```cmd
yarn 

or 

npm install
```

### For android

```cmd
  yarn android

  or 

  nmp run android
```

### For IOS

```cmd
  yarn ios

  or 

  nmp run ios
```


## Screens you will see

### Markets Screen Light

![market light](https://github.com/Humed-Muhammad/investSky-test/blob/master/src/assets/images/lightMain.jpg)
### Markets Screen Dark

![market dark](https://github.com/Humed-Muhammad/investSky-test/blob/master/src/assets/images/darkMain.jpg)

### Portfolio Screen Light

![portfolio light](https://github.com/Humed-Muhammad/investSky-test/blob/master/src/assets/images/lightPort.jpg)

### Portfolio Screen Dark

![portfolio dark](https://github.com/Humed-Muhammad/investSky-test/blob/master/src/assets/images/darkPort.jpg)


### Stocks Search

![Stock Search](https://github.com/Humed-Muhammad/investSky-test/blob/master/src/assets/images/lightSearch.jpg)

# Building for production

## 1. Prerequisites

## A. Clone the project
- Run the following command
```cmd
git clone https://github.com/Humed-Muhammad/investSky-test
```
- Make sure you have expo-cli if not run the following command

```cmd
npm install -g expo-cli
```
- The CD to project

```cmd
cd investSky-test
```

## B. Expo Account
- You can sign up at https://expo.dev/signup.

## 2. Login to expo account

### Install the latest EAS CLI

```cmd
npm install -g eas-cli
```
then 

```cmd
eas login
```

## 3. Configure the project
To configure an iOS or an Android project for EAS Build, run the following command:

```cmd
eas build:configure
```

## 4. Build for Preview

```cmd
eas build -p android --profile preview
```