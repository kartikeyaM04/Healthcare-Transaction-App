# Healthcare Transaction App

A modern web application designed to facilitate healthcare transactions using speech recognition and AI technologies. This project combines a React frontend with a Django backend to create an intuitive healthcare management system.

## Project Overview

The Healthcare Transaction App is a full-stack application that enables users to interact with healthcare services using voice commands. It features speech recognition capabilities and integrates with Google's Generative AI for processing healthcare-related queries and transactions.

### Tech Stack

#### Frontend
- React.js (v19.1.1)
- Bootstrap (v5.3.8)
- Modern JavaScript (ES6+)
- Testing Libraries:
  - Jest
  - React Testing Library

#### Backend
- Django (Python web framework)
- SQLite3 (Database)
- Google Generative AI Integration
- Python dotenv for environment management

## Features

- 🎤 Speech Recognition Integration
- 🤖 AI-Powered Response System
- 💻 Modern React-based User Interface
- 🔒 Secure Backend API
- 📱 Responsive Design with Bootstrap
- ⚡ Real-time Processing

## Project Structure

```
├── backend/                 # Django backend
│   ├── api/                # API application
│   │   ├── migrations/     # Database migrations
│   │   ├── admin.py       # Admin configuration
│   │   ├── models.py      # Data models
│   │   └── views.py       # API endpoints
│   ├── backend/           # Project configuration
│   ├── manage.py         # Django management script
│   └── requirements.txt   # Python dependencies
│
├── frontend/              # React frontend
│   ├── public/           # Static files
│   ├── src/             # Source code
│   │   ├── App.js       # Main application component
│   │   ├── SpeechInput.js # Speech recognition component
│   │   └── ...         # Other React components
│   └── package.json     # Node.js dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)
- npm (Node.js package manager)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - Unix/MacOS:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Set up environment variables:
   Create a `.env` file in the backend directory with:
   ```
   GOOGLE_API_KEY=your_google_ai_api_key
   ```

6. Run migrations:
   ```bash
   python manage.py migrate
   ```

7. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
python manage.py test
```

## API Documentation

The backend provides RESTful API endpoints for:
- Speech-to-text processing
- Healthcare transaction processing
- AI-powered response generation

Base URL: `http://localhost:8000/api/`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js team for the amazing frontend framework
- Django team for the robust backend framework
- Google Generative AI for powering the intelligent responses
- Contributors and maintainers of all dependencies used in this project
