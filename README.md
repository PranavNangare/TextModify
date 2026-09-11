# TextModify

**TextModify** is a React-based text utility web application that allows users to quickly transform, clean, analyze, copy, and preview text from a simple browser interface.

The application provides common text-processing operations such as converting text to uppercase or lowercase, removing extra spaces, clearing text, and copying text to the clipboard. It also generates a basic text summary with word count, character count, estimated reading time, and a live preview. A light/dark mode toggle and alert messages improve the overall user experience.

## Features

- Convert entered text to **UPPERCASE**
- Convert entered text to **lowercase**
- Remove extra spaces
- Clear all entered text
- Copy processed text to the clipboard
- Display word count
- Display character count
- Estimate reading time
- Show a live text preview
- Toggle between **Light Mode** and **Dark Mode**
- Display success/warning alerts after user actions
- Navigate between Home and About pages using React Router
- Responsive styling using Bootstrap

## Application Flow

```text
User Enters Text
       |
       v
+----------------------+
|   TextModify Input   |
+----------+-----------+
           |
           v
+----------------------+
| Select Text Action   |
|                      |
| - Uppercase          |
| - Lowercase          |
| - Remove Spaces      |
| - Copy Text          |
| - Clear Text         |
+----------+-----------+
           |
           v
+----------------------+
| React Event Handler  |
| Processes Text       |
+----------+-----------+
           |
           v
+----------------------+
| Update React State   |
+----------+-----------+
           |
     +-----+------+
     |            |
     v            v
Processed Text   Alert Message
     |
     v
+----------------------+
| Text Summary         |
| - Word Count         |
| - Character Count    |
| - Reading Time       |
| - Preview            |
+----------------------+
```

## Technologies Used

- **React**
- **JavaScript**
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **React Router**
- **React Hooks**
- **Clipboard API**

## Project Structure

```text
textmodify/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Alert.js
│   │   ├── Navbar.js
│   │   └── TextForm.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
└── README.md
```

## Component Overview

### `App.js`

Acts as the main application component. It:

- Maintains the application's light/dark mode state.
- Handles mode switching.
- Creates temporary alert messages.
- Configures application routes.
- Renders the navigation bar, alert component, text utility page, and About page.

The application uses routes for:

```text
/       -> Text utility
/about  -> About page
```

### `TextForm.js`

Contains the core text-processing functionality.

The component maintains the user's text with React's `useState` hook and provides handlers for:

```text
Uppercase conversion
Lowercase conversion
Clear text
Copy to clipboard
Remove extra spaces
```

It also calculates and displays:

```text
Word count
Character count
Estimated reading time
Text preview
```

### `Navbar.js`

Provides application navigation and the light/dark mode switch.

The navigation bar contains:

- TextModify branding
- Home link
- About link
- Dark Mode toggle

### `Alert.js`

Displays feedback after a user performs an action.

Example notifications include:

```text
Converted to upper case
Converted to lower case
Text is cleared
Copied to clipboard
All extra spaces removed
```

Alerts automatically disappear after a short period through the alert logic in `App.js`.

### `About.js`

Provides an About page built with a Bootstrap accordion structure.

### `index.js`

Initializes the React application and renders the main `App` component into the browser DOM.

## Text Processing Logic

### Convert to Uppercase

```javascript
let newText = text.toUpperCase();
setText(newText);
```

### Convert to Lowercase

```javascript
let newText = text.toLowerCase();
setText(newText);
```

### Remove Extra Spaces

```javascript
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
```

### Copy Text

The application selects the textarea content and uses the browser Clipboard API:

```javascript
navigator.clipboard.writeText(ttext.value);
```

### Clear Text

```javascript
setText("");
```

## Text Analytics

TextModify provides a simple summary below the text editor.

### Word Count

The application calculates the number of words from the entered text.

### Character Count

```javascript
text.length
```

### Reading Time

The current implementation estimates reading time using:

```javascript
0.008 * wordCount
```

### Preview

The current text is displayed immediately below the summary. If no text has been entered, the application prompts the user to enter text.

## Light and Dark Mode

The application stores the current display mode using React state:

```javascript
const [mode, setMode] = useState('light');
```

When Dark Mode is enabled, the application updates the page background and component text styling. Switching back restores the light appearance.

The user receives an alert whenever the display mode changes.

## Routing

React Router is used for client-side navigation.

```javascript
<Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<TextForm />} />
</Routes>
```

This allows users to move between the main text-processing interface and the About page without requiring a full browser-page reload.

## Bootstrap Integration

Bootstrap 5 is loaded in the public HTML file and is used for:

- Navigation bar
- Buttons
- Form controls
- Alerts
- Accordion components
- Responsive containers
- Dark/light navigation styling

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <repository-folder>
```

### 2. Install dependencies

Make sure Node.js and npm are installed, then run:

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The application will normally open at:

```text
http://localhost:3000
```

## Available Scripts

### Start the application

```bash
npm start
```

Runs the application in development mode.

### Run tests

```bash
npm test
```

Launches the test runner.

### Create a production build

```bash
npm run build
```

Creates an optimized production build.

## Example User Workflow

```text
1. Open TextModify
2. Enter or paste text
3. Select a text-processing operation
4. React processes the text
5. Updated text appears in the input area
6. An alert confirms the operation
7. Review word/character statistics
8. Preview or copy the processed text
```

## Current Limitations

The current project is a lightweight front-end text utility and does not use a backend or database.

A few areas can be improved in future versions:

- Improve word-count handling for empty text and multiple whitespace types.
- Replace direct DOM selection in the copy function with a React ref or direct state-based clipboard operation.
- Expand the About page with project-specific content.
- Update the default Create React App test to reflect the actual TextModify interface.
- Add additional text transformations and analytics.
- Add persistent user preferences for dark/light mode.
- Improve accessibility and mobile layout.
- Add unit tests for individual text-processing functions.

## Future Enhancements

Possible extensions include:

- Title Case conversion
- Sentence Case conversion
- Find and replace
- Text reversal
- Remove punctuation
- Remove duplicate words
- Keyword frequency analysis
- Sentence and paragraph counts
- Download processed text as a `.txt` file
- Text-to-speech
- Speech-to-text
- Local storage for saved text
- Advanced readability analysis
- More comprehensive automated testing

## Author

**Pranav Nangare**

## Disclaimer

TextModify is a front-end utility project created for learning and demonstrating React concepts including components, state management, event handling, routing, conditional styling, and reusable UI components.
