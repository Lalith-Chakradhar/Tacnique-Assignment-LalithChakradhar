# Setup and Run Instructions

Follow these steps to set up and run the application on your local machine:

### 1. Clone the Repository
Choose the directory on your computer where you want to place the app. Then, open VS Code and clone the repository.

```bash
git clone https://github.com/Lalith-Chakradhar/Tacnique-Assignment-LalithChakradhar.git
cd Tacnique-Assignment-LalithChakradhar
```

### 2. Install Create React App, NPX, and NPM
Ensure you have create-react-app, npx, and npm installed.

```bash
npm install -g npm
npm install -g create-react-app
npm install -g npx
```

### 3. Create a New React App
Open a terminal in VS Code and create a new React app.

```bash
npx create-react-app your-app-name
cd your-app-name
```

### 4. Replace Files
Copy and add/replace the following files from the downloaded GitHub repository into the newly created app folder:

`src/components/`
`src/index.js`
`src/index.css`
`src/app.js`
`src/app.css`
`src/UserContext.js`
`package.json`
`package-lock.json`

### 5. Install Dependencies
In the terminal, navigate to your app directory and install all the necessary dependencies

```bash
npm install
```

### 6. Start the Application
After installing all dependencies, start the application.

```bash
npm start
```
The app will start and continue running. It will be displayed in your default browser with a localhost URL.


### 7. Stop the Application
To stop the application, open another terminal with the path set to the current directory where your app folder is located. Press Ctrl + C, then press Y to stop the batch job.

```bash
Ctrl + C
```

### 8. Build the Application
If you want to deploy the app, you should first build it.

```bash
npm run build
```

This will create an optimized build of your app, ready for deployment in a production environment.


