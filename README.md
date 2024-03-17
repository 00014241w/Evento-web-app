# EventManager
This application was developed for Web Application module, as coursework portfolio project @ WIUT by student ID: 00014241
Welcome to the Event Manager Application! This project consists of a RESTful API built with ASP.NET Core for managing events and a Single Page Application (SPA) built with Angular for the frontend.

## Features

### API (ASP.NET Core)

- Allows users to perform CRUD operations on events.
- Supports category management for events.
- Validates input data using model annotations.
- Provides endpoints for retrieving event data.

### SPA (Angular)

- Allows users to create, view, update, and delete events.
- Provides a user-friendly interface for managing events.
- Implements two-way data binding for real-time updates.
- Integrates with the API to fetch and update event data.

## Getting Started

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hulkarv/Evento-web-app.git

2. Navigate to the API directory:

   ```bash
   cd EventsManager

3. Install API dependencies:

   ```bash
   dotnet restore

4. Run the API:

   ```bash
   dotnet run

5. Open a new terminal and navigate to the SPA directory:

   ```bash
   cd ../events-app

6. Install SPA dependencies:

   ```bash
   npm install

7. Run the SPA:

   ```bash
   npm start

8.Access the application in your browser:

http://localhost:4200

### Usage
Create, view, update, and delete events using the SPA interface.
Use the API endpoints for programmatic access to event data.
Customize and extend the application as needed for your use case.
Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests to help improve the project.

### License
This project is licensed under the MIT License.
