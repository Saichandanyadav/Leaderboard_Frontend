# Leaderboard Frontend

Welcome to the **Leaderboard Frontend**! This application allows users to manage their points and view claim histories in a sleek and intuitive interface. Built with React, it interacts with a robust backend to provide real-time updates and a seamless user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **User Management**: Create and manage users easily.
- **Claim Points**: Users can claim points randomly awarded between 1 and 1000.
- **Claim History**: View the history of claimed points, including the amount and date.
- **Responsive Design**: Fully responsive layout for all devices.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making API requests.
- **CSS**: For styling the application.
- **React Router**: For navigation between components.
- **dotenv**: For managing environment variables.

## Getting Started

To get a copy of this project up and running on your local machine for development and testing, follow these steps:

### Prerequisites

- Node.js (>=14.x)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Saichandan17/leaderboard-frontend.git
   cd leaderboard-frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API base URL:

   ```plaintext
   REACT_APP_API_URL=https://leaderboard-backend-ycze.onrender.com/api
   ```

## Usage

To start the development server, run:

```bash
npm start
```

This will launch the application in your default browser at `http://localhost:3000`.

## Folder Structure

```
leaderboard-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ClaimHistory/
│   │   │   ├── ClaimHistory.js
│   │   │   └── ClaimHistory.css
│   │   ├── UserForm/
│   │   │   ├── UserForm.js
│   │   │   └── UserForm.css
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Leaderboard.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thank you to all the contributors and the open-source community!
- Special thanks to [React](https://reactjs.org/) for making frontend development easier and more enjoyable.

---

Feel free to reach out if you have any questions or feedback!
```

### Updates Made:
- Updated the GitHub repository link with your username: `https://github.com/Saichandanyadav/Leaderboard_Frontend.git`.

