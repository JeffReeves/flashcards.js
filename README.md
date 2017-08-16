# flashcards.js
A minimalistic browser-based flashcard system built on JavaScript

![Screenshot](https://raw.githubusercontent.com/JeffReeves/flashcards.js/master/screenshot.png)

![Screenshot_2](https://raw.githubusercontent.com/JeffReeves/flashcards.js/master/screenshot_back.png)

## How to Use

### Local (offline) Version

1. Download this repository and extract it wherever you want.
2. Open the `local` folder.
3. Edit the `decks.js` file to add your own decks and cards.
4. Run the `index.html` file to load it into a browser.

### Server (online) Version

**PREREQUISITES:**
- Node.js and npm
- Nginx (or Apache)
- MySQL (MariaDB)

1. Upload this repository onto your server.
2. Add the following to your Nginx conf file's server block (see `setup/nginx-example.conf`) and restart Nginx:
    ```
    location /flashcards/  {
        proxy_pass http://127.0.0.1:9001/;
    }
    ```
3. Create a MySQL database and a user to access it (see `setup/mysql-setup.txt`).
4. Create all necessary tables within the database; and add a user,
decks, and cards (see `flashcards-create.sql` for details/examples).
4. Update the connection strings to link the app to the database in 
`database.js`.
5. Update the username variable on the 
bottom of the `views/index.html` file to the username you put 
in the database.
6. Install PM2:
    ``` 
    npm install pm2 -g
    ```
7. Start the app with pm2:
    ```
    pm2 start pm2.json
    ```
8. Go to http://yourdomain.tld/flashcards/