#!/bin/bash
# Database initialisation
cd database
docker compose up -d
mongosh populateDB.js
cd ..