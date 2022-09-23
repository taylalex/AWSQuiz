# Database README

## Requirements
- [Docker](https://docs.docker.com/get-docker/)
- [mongosh](https://www.mongodb.com/docs/mongodb-shell/install/?_ga=2.167299704.718689182.1663841694-944797592.1663841694)

## Running the database
Run `docker compose up`

## Accessing the DB
Connection can be made programatically using the connection string   
`mongodb://mongo:27017`

## Populating the DB
Run `mongosh populateDb` to populate the database with easy questions.

## Useful info
The database defaults to the 'test' db.

## Quick Reference Mongosh commands
Switch DB:``` use <db name> ```   
Create a collection:``` db.createCollection()```   
Insert one object into DB: ```db.<collection name>.insertOne()```
