# flashcards.js
A minimalistic browser-based flashcard system built on JavaScript

[Alt text](/screenshot.png?raw=true "Front of Card")

[Alt text](/screenshot_back.png?raw=true "Back of Card")

## How to Use

### Local (offline) Version

1. Download this repository and extract it wherever you want.
2. Open the `local` folder.
3. Edit the `flashcards.js` file to add your own flashcards.
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
3. Install PM2:
    ``` 
    npm install pm2 -g
    ```
4. Start the app with pm2:
    ```
    pm2 start pm2.json
    ```
5. Go to http://yourdomain.tld/flashcards/