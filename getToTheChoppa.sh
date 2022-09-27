#!/bin/bash
# Database initialisation
cd database
docker compose up -d
mongosh populateDB.js
cd ..

# Client initialisation
cd client 
cwd=$(pwd)
osascript - "$cwd"  <<EOF
    on run argv -- argv is a list of strings
        tell application "Terminal"
            activate
            do script ("cd " & quoted form of item 1 of argv & "; npm start")
        end tell
    end run

EOF
cd ..