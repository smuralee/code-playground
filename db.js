/**
 *    Copyright 2020 Suraj Muraleedharan
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("games.sqlite", (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the database.')
        db.run(`CREATE TABLE games
                (
                    id        INTEGER PRIMARY KEY AUTOINCREMENT,
                    name      text,
                    publisher text
                )`, (err) => {
            if (err) {
                console.log("Table is created")
            } else {
                // Table just created, creating some rows
                const insert = 'INSERT INTO games (name, publisher) VALUES (?,?)';
                db.run(insert, ["Last of us", "Naughty Dog"])
                db.run(insert, ["Assassins' Creed", "Ubisoft"])
            }
        })
    }
})


module.exports = db
