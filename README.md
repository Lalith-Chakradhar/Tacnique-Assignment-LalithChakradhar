# Setup and Run Instructions

Follow these steps to set up and run the application on your local machine:

## 1. Clone the Repository
Choose the directory on your computer where you want to place the app. Then, open VS Code and clone the repository.

```bash
git clone https://github.com/Lalith-Chakradhar/Tacnique-Assignment-LalithChakradhar.git
cd Tacnique-Assignment-LalithChakradhar
```

## 2. Install Create React App, NPX, and NPM
Ensure you have create-react-app, npx, and npm installed.

```bash
npm install -g npm
npm install -g create-react-app
npm install -g npx
```

## 3. Create a New React App
Open a terminal in VS Code and create a new React app.

```bash
npx create-react-app your-app-name
cd your-app-name
```

## 4. Replace Files
Copy and add/replace the following files from the downloaded GitHub repository into the newly created app folder:

`src/components/`
`src/index.js`
`src/index.css`
`src/app.js`
`src/app.css`
`src/UserContext.js`
`package.json`
`package-lock.json`

## 5. Install Dependencies
In the terminal, navigate to your app directory and install all the necessary dependencies

```bash
npm install
```

## 6. Start the Application
After installing all dependencies, start the application.

```bash
npm start
```
The app will start and continue running. It will be displayed in your default browser with a localhost URL.


## 7. Stop the Application
To stop the application, open another terminal with the path set to the current directory where your app folder is located. Press Ctrl + C, then press Y to stop the batch job.

```bash
Ctrl + C
```

## 8. Build the Application
If you want to deploy the app, you should first build it.

```bash
npm run build
```

This will create an optimized build of your app, ready for deployment in a production environment.


# Challenges Faced During Development

## 1. Props Drilling Issue

There was an issue with props drilling in the components. This was a challenge as it made the components unnecessarily heavy and harder to maintain. The issue was mitigated by:

- Using the `useContext` hook to manage global state and pass data more efficiently between components.
- Maintaining a separate file UserContext.js to handle API calls for fetching users, adding a user, editing a user, and deleting a user.

This approach streamlined data access across components, eliminating the need for excessive prop passing and making the app more modular and maintainable.

## 2. Integrating Modal for User Management

Integrating a modal that handled both adding and editing user data presented a challenge. Proper event handling was crucial to ensure that the modal functioned correctly for both operations. To address this:

- `useState` was used to manage the modal's state, determining whether it was in "add" or "edit" mode.
- `useEffect` was employed to handle side effects and ensure the modal displayed the correct data when editing a user.

These techniques ensured that the modal was both functional and user-friendly, providing a smooth experience for managing user data.

## 3. Implementing a Common NavBar

Creating a common NavBar that dynamically displayed different components based on the button clicked was challenging. This challenge involved:

- **Dynamic Component Rendering**: Components needed to be displayed according to which NavBar button was clicked and whether the application was in `editOrDelete` mode. This required careful handling of state to ensure that the correct components were rendered.
- **Conditional Buttons in User Cards**: When in `editOrDelete` mode, additional buttons needed to appear in the User Card component, which added complexity to the UI logic.
- **Mode Management in ViewUsers Component**: The `ViewUsers` component required a separate `mode` state variable to manage and present different components (`EditUser`, `DeleteUser`, `UserCards`) based on the application's current mode (edit, delete, or view).

These challenges required careful state management and conditional rendering to ensure the NavBar and associated components functioned seamlessly.


# Improvements If Given More Time

If more time were available, the following improvements would be prioritized:

## 1. Enhanced Functionality

- **Cleaner Code**: Refactor the app's codebase to further simplify and streamline functionality, ensuring all edge cases and possible user interactions are handled.
- **Optimized Functions**: Improve existing functions to handle all potential scenarios, providing a more robust and error-resistant application.

## 2. Complete Responsiveness

- **Responsive Design**: Focus on making the app fully responsive, ensuring a seamless user experience across all devices, including mobile, tablet, and desktop.



