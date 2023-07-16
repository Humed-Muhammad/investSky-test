# expo-boilerplate

## Created By Humed Muhammad Essie

This boilerplate is  Created By expo based react native boilerplate and template generator.

It has some scaffolding using generators to help you speed up your development and come with pre configure features listed below:-

# Features
1. Generators
 - Components
 - Redux slices
 - Redux injectors
 - Screens with automatic navigation setup 
2. Localization set up
3. Bottom navigation
4. Dark and light theme
5. Import with alias
6. Typescript
7. Redux and Redux-toolkit
8. Redux-saga
9. Lazy load slice with Redux injectors
10. Lazy load component

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


## First Screen

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