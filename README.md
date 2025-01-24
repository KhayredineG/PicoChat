# PicoChat

PicoChat is an ultra-lightweight AI chat platform designed for delivering quick and accurate answers without the unnecessary fluff. Built using HTML and JavaScript, PicoChat leverages fast open-source models to provide a seamless and efficient user experience.

## Features

- **Fast and Responsive:** Optimized for quick response times to ensure users receive answers promptly.
- **Lightweight Design:** Minimalistic interface built with HTML and JavaScript for optimal performance.
- **Open-Source Models:** Utilizes fast and reliable open-source AI models for generating responses.
- **Local Chat History:** Stores chat history locally using SQLite or browser storage, ensuring user privacy and quick access.
- **RAG System Integration:** Implements Retrieval-Augmented Generation (RAG) using Exa for enhanced context-aware responses.

## Technologies Used

- **Frontend:** HTML, JavaScript
- **Backend:** [Groq](https://groq.io/) for query processing
- **RAG System:** Exa for context retrieval
- **Database:** SQLite or Browser Storage for local chat history

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/picchat.git
    cd picchat
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run the Application**
    ```bash
    npm start
    ```

4. **Open in Browser**
    Navigate to `http://localhost:3000` in your preferred web browser.

## Usage

- **Start a Chat:** Begin typing your queries in the chat interface to receive instant answers.
- **View Chat History:** Access your previous conversations stored locally for quick reference.
- **Manage Settings:** Customize your chat experience through the settings panel.

## Development

### Tasks

1. **Build the Chat System**
    - **Description:** Develop the core chat functionality using JavaScript and Groq.
    - **Technologies:** JavaScript, Groq
    - **Status:** In Progress

2. **Develop the RAG System**
    - **Description:** Implement the Retrieval-Augmented Generation system using Exa and integrate it with Groq for context passing.
    - **Technologies:** Exa, Groq
    - **Status:** Pending

3. **Set Up Chat History Storage**
    - **Description:** Configure local storage for chat history using SQLite or browser storage solutions to ensure data persistence on the user's machine.
    - **Technologies:** SQLite
    - **Status:** Pending

### Contribution Guidelines

We welcome contributions from the community! To contribute, please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**
    ```bash
    git checkout -b feature/YourFeature
    ```
3. **Commit Your Changes**
    ```bash
    git commit -m "Add YourFeature"
    ```
4. **Push to the Branch**
    ```bash
    git push origin feature/YourFeature
    ```
5. **Open a Pull Request**

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact [your.email@example.com](mailto:your.email@example.com).