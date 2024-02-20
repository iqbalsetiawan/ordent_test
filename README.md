# Ordent Tasks

## Task Descriptions

### Task 1: Perfect Ten Minute Walk

- **Objective**: Create a function that returns `true` if the walk designed by the app takes exactly ten minutes and returns you to your starting point. Return `false` otherwise.
- **Input**: An array of one-letter strings representing directions to walk (`'n'`, `'s'`, `'w'`, `'e'`).
- **Output**: `true` or `false`.

### Task 2: Remainder Calculator

- **Objective**: Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value. Division by zero should return `NaN`.
- **Examples**:
  - Input: `n = 17`, `m = 5` -> Output: `2`
  - Input: `n = 13`, `m = 72` -> Output: `7`
  - Input: `n = 0`, `m = -1` -> Output: `0`
  - Division by zero case returns `NaN`.

### Task 3: String Grouping

- **Objective**: Create a function that returns a string combining all letters of three input strings in groups.
- **Input**: Three strings of the same length.
- **Output**: A new string with the first letters of all inputs grouped, then the second letters, and so on.
- **Example**:
  - Input: `"aa"`, `"bb"`, `"cc"` -> Output: `"abcabc"`

### Task 4: Acronym Generator

- **Objective**: Write an acronym generator for names. Names can have a maximum of two first names (possibly joined with a dash) and two last names (also possibly joined with a dash). Special consideration for last names starting with "von" (to be abbreviated as "v").
- **Input**: A name string.
- **Output**: The acronym of the name, in upper case.
- **Examples**:
  - `Thomas Meyer` -> `TM`
  - `martin schmidt` -> `MS`
  - `Jan-Erich Schmidt` -> `JES`
  - `Paul von Lahnstein` -> `PvL`

## Prerequisites

- Git
- Node.js

## Installing

- **Clone the repository**

  - `git clone https://github.com/iqbalsetiawan/ordent_test.git`
  - `cd <repository-name>`

- **Run with Node.js**

  Navigate to the directory containing the task file you want to run. Run the script using Node.js by typing:
  
  - `node <script-name>.js`

  Replace `<script-name>.js` with the name of the JavaScript file you wish to run.
