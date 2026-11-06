# 🎮 Simon Game

A simple **Simon Memory Game** built with **HTML, CSS, and JavaScript**. The player watches a sequence of coloured buttons, then repeats the sequence in the same order. The sequence gets longer as the player moves through the levels.

> 📚 **Learning project:** I created this mini project to practise JavaScript fundamentals, especially **DOM manipulation**, event handling, functions, arrays, and basic game logic. It is a learning project, not a production application.

## ✨ Features

- 🎨 Four coloured buttons: Pink, Red, Blue, and Yellow.
- ▶️ Start the game by pressing any keyboard key or clicking **Start Game**.
- 🧠 A random colour sequence is generated for each level.
- 💡 Button flashes show the sequence the player needs to remember.
- 🖱️ Click the coloured buttons to repeat the sequence.
- 📈 The game moves to the next level when the sequence is entered correctly.
- 🏁 A **Game Over** message displays the score when an incorrect button is pressed.
- 🔄 Start a new game after Game Over using the keyboard or the **Start Game** button.
- 📱 CSS includes a mobile layout adjustment while the default styles provide the larger-screen layout.

## 🛠️ Technologies Used

- **HTML5** – page structure and game buttons.
- **CSS3** – styling, button colours, flash effects, and media queries.
- **Vanilla JavaScript** – game sequence, user input, level progression, and DOM manipulation.

No frameworks or external libraries are required.

## 🧠 JavaScript Concepts Practised

This project was built to practise the following concepts:

- **DOM Selection:** `document.querySelector()` and `document.querySelectorAll()`.
- **DOM Updates:** changing the heading text and the Start Game button visibility.
- **Class Manipulation:** `classList.add()` and `classList.remove()` for button flash effects.
- **Event Listeners:** handling keyboard presses and button clicks.
- **Arrays:** storing the game sequence and the player's sequence.
- **Functions:** separating actions such as starting the game, flashing buttons, checking answers, and resetting the game.
- **Conditional Statements:** checking the player's input and deciding whether to continue or end the game.
- **Random Number Generation:** selecting the next colour using `Math.random()` and `Math.floor()`.
- **Timers:** using `setTimeout()` for flash effects and level progression.

## 🎯 How to Play

1. Open the game in your browser.
2. Press **any keyboard key** or click **Start Game**.
3. Watch the coloured button that flashes.
4. Click the same coloured button.
5. At the next level, remember the previous sequence and repeat it, followed by the new colour.
6. Continue for as many levels as you can.
7. If you click the wrong button, the game ends and your score is displayed.
8. Click **Start Game** or press a keyboard key to play again.

## 📁 Project Structure

```text
Simon-Game/
├── index.html   # Game page structure
├── style.css    # Styling and responsive layout
├── simon.js     # Game logic and DOM interactions
└── README.md    # Project documentation
```

## 🚀 Run the Project Locally

No installation or build setup is needed.

**Option 1 – Open directly**

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`, or open it in your preferred web browser.
4. Start playing!

**Option 2 – Clone using Git**

```bash
git clone <your-repository-url>
cd <repository-folder>
```

Then open `index.html` in your browser.

## 📱 Responsive Layout

The stylesheet includes a mobile media query for screens up to **600px** and a desktop media query for screens wider than **1024px**. Tablet-sized screens use the default styles.

## 🎓 Project Purpose

The main purpose of this project was to get practical experience with **JavaScript DOM manipulation** and understand how HTML elements can be selected, updated, and controlled through JavaScript. It also helped me practise arrays, events, functions, conditions, and simple game logic.

This is one of my JavaScript learning projects, and I may improve it further as I continue learning.

---

⭐ **Thanks for checking out my Simon Game!**
