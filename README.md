# loggie-server-node 
Loggie Server-side NodeJS implementation working with SQLite database.  
On client side, look at [loggie.js](https://github.com/haxpor/loggie.js)

# Database Schemas

It's based on SQLite database with 2 tables

1. `mark` table  
   This table is used to authen and grant permission for a single user to be able to interact with `timelog` table or say be able to log time.  

   It is created with following schema  

   ```sqlite
   CREATE TABLE mark (udid char(40) PRIMARY KEY NOT NULL, ip_address TEXT NOT NULL, granted BOOLEAN);
   ```

2. `timelog` table  
   This table is for reading logged times, and updating times for various projects.

   It is created with following schema  

   ```sqlite
   CREATE TABLE timelog (dtime_start DATETIME PRIMARY KEY NOT NULL, dtime_end DATETIME, project TEXT NOT NULL);
   ```

# Misc
This project is based on [basejit](https://github.com/haxpor/basejit)

# License
This project is licensed under [MIT](https://github.com/haxpor/loggie-server-node/blob/master/LICENSE)
