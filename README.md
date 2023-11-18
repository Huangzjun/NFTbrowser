# NFTbrowser

## Introduction

NFTbrowser is a web application designed to browse and display Non-Fungible Tokens (NFTs). It provides users with an intuitive interface to explore various NFTs, view their details, and interact with them.

## Features

- **Browse NFTs**: View a list of available NFTs.
- **Search NFTs**: Search for specific NFTs by name or attributes.
- **View NFT Details**: Click on an NFT to view detailed information.
- **Trade Trends**: View a trend chart of NFT trades.

## Architecture

The project follows a component-based architecture, with the main components being:

- **App**: The root component that sets up routing and renders other components.
- **Header**: A component that displays the navigation bar.
- **NFTList**: A component that fetches and displays a list of NFTs.
- **NFTDetail**: A component that displays detailed information about a selected NFT.
- **SearchBar**: A component that allows users to search for NFTs.
- **TradeTrends**: A component that displays a trend chart of NFT trades.

The state management is handled using Redux, with actions and reducers defined for fetching and storing NFT data and managing search queries.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/NFTbrowser.git
    ```
2. Navigate to the project directory:
    ```sh
    cd NFTbrowser
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\



