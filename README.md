# payabl. Frontend Engineer Code Assignment

## Requisites

You must have NodeJS installed along with npm in your machine to develop this assignment.
[Get it here](https://nodejs.org/en/download/current)

## Instructions

1. **Setup:** Install the dependencies with `npm install`. To run the app in development mode, execute `npm run dev`

## Objective

Your main task is to integrate the Star Wars API [(SWAPI)](https://swapi.dev) with a NextJS app running React Query, Axios, and Ant Design. For the integration to be considered successful, it must fulfill the criteria below.

## Acceptance criteria

1. **SWAPI Integration:** Use Axios and React Query to fetch data from SWAPI.
2. **Tabbed Interface:**
   Implement a page that, when it is loaded, it displays 3 tabs, each one containing a table of data, that the user can navigate in between. Tabs should contain:
   - **Planets Tab:** Display a table of planets.
   - **People Tab:** Display a table of people.
   - **Choice Tab:** Display a table of data of your choice (e.g., Starships, Species).
3. **Ant Design Tables:** Use Ant Design's Tab component to render the tabs interface and the Table component to display data in each tab. (If you feel the need to add other UI elements from `antd` library, feel free to do so)

## Bonus Features

1. **Detail Drawer:** Implement a feature where clicking on a table row opens a drawer showing detailed information of the selected item. You can use the `Drawer` component from `antd`
2. **Search Functionality:** Include an `antd`'s `Input.Search` component to filter table results based on the input value.

## Submission

- Once you are done, include a `CHANGELOG.md` file in which you can list the features you have implemented in the project
- You can then compress the repository into a zip file - without the dependencies, please - and send it back to the recruiter that provided you with this assignment.
- Feel free to write any other documentation you feel necessary to clarify your thougts, decisions and processes while developing.

## Evaluation Criteria

Your assignment will be evaluated based on:

- Code structure, clarity and readability.
- Coding practices adopted to ensure quality.
- Correct implementation of the tools aforementioned.
- Correctly fulfilling the acceptance criteria.
- Basic look and feel of the application. You must not be a Michelangelo, but care with the UI will not be overlooked. Feel free to style as you see fit.

## Questions and answers

- Do I need to install any dependencies?
  - All the dependencies necessary for the implementation of the assignment are already added to the project when you run the setup installation. Unless you feel the need to install any additional dependencies to finish your implementation. In this case, please include in the documentation the reasons for doing it so.
- Can I ask other questions?
  - Absolutely! If you need any clarification or have any questions do not hesitate to contact your recruiter. Ensure the you undestand the assignemnt prior to starting it.

Good luck! May the force be with you.
