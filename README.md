# reactvideolibrary-frontend

For temporary access use Cors-Anywhere Demo:
https://cors-anywhere.herokuapp.com/corsdemo

Then use the link:
https://main.d1dqamtgsyabk9.amplifyapp.com/

*AWS deployment is currently offline.* 
# Local Server Setup
Follow these steps to set up the app on your local server.

## Prerequisites

- Git
- MySQL
- Node.js
- Python (3.6 or higher)

## Installation and Setup

1. Clone the repository:

    ```shell
    git clone https://github.com/voolyvex/reactvideolibrary-backend.git
    ```

2. Set up a virtual environment:

    ```shell
    python -m venv env
    ```

3. Activate the virtual environment:

   - For Windows:

     ```shell
     env\Scripts\activate
     ```

   - For macOS/Linux:

     ```shell
     source env/bin/activate
     ```

4. Install Python dependencies:

    ```shell
    pip install -r requirements.txt
    ```

5. Install frontend dependencies:

    ```shell
    cd reactvideolibrary-frontend
    npm install
    ```

6. Configure the database settings:

   - Open the "settings.py" file in the "reactvideolibrary-backend" directory.
   - Modify the `DATABASES` section to match your MySQL configuration (database name, username, password, and host).

7. Migrate the database:

    ```shell
    cd reactvideolibrary-backend
    python manage.py migrate
    ```

## Running the App

1. Start the Django development server:

    ```shell
    python manage.py runserver
    ```

2. Start the frontend development server:

    ```shell
    cd reactvideolibrary-frontend
    npm start
    ```

3. Access the app:

   Open a web browser and go to [http://localhost:8000](http://localhost:8000) to access the video library application.

