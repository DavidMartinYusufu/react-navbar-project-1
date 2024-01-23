# React: Navigation Bar Component

## Environment 

- React Version: 17.0.2
- Node Version: 14(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/I6El9Mc6YIPHVyHHMA3VjQ/navigation-bar.gif)

## Functionality Requirements

The component has the following functionalities:

- There are 4 tabs: Home, News, Contact, About.
- The default selected tab is the 'Home' tab.
- Clicking on a tab renders the relevant content.
  - Clicking on the Home tab renders content 'HOME PAGE'.
  - Clicking on the News tab renders content 'NEWS PAGE'.
  - Clicking on the Contact tab renders content 'CONTACT PAGE'.
  - Clicking on the About tab renders content 'ABOUT PAGE'.
- Since the default selected tab is the 'Home' tab, the default displayed content is 'HOME PAGE'.

## Testing Requirements

- The parents of 4 tabs has data-testid attribute 'navigation-tabs'.
- The content section has data-testid attribute 'tab-content'.

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
