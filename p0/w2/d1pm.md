# Week 2: Day 1 PM // SQL


## Understanding the Database Schema

In this sections, you’ll develop a very small database for a social media application. The database will consist of four tables:

- users
- posts
- comments
- likes

A high-level diagram of the database schema is shown below:

![diagram](https://files.realpython.com/media/python-sql-database-schema.3f28bf80fefe.png)

Both users and posts will have a one-to-many relationship since one user can like many posts. Similarly, one user can post many comments, and one post can also have multiple comments. So, both users and posts will also have one-to-many relationships with the comments table. This also applies to the likes table, so both users and posts will have a one-to-many relationship with the likes table.

In a database, there is an entity which uniquely identifies a row in a table, namely **Primary Key**. Primary key in a relational table prevents duplicate rows in that table. In order to connect a table to another/others, we need an entity that connect each table, which is **Foreign Key**.

## Basic SQL
SQL (Standard Query Language) is a standard language for storing, manipulating, and retrieving data in databases. Contrasting Python, SQL is not a case-sensitive language so both of lower and upper case are the same meaning. However, usually to differentiate the command to others, we used UPPERCASE to write the commands. SQL commands list diagram is shown below:
![diagram](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190826175059/Types-of-SQL-Commands.jpg)

However, in this lesson, we are going to learn 5 basic commands of SQL only which are **CREATE**,**INSERT**,**UPDATE**, **DELETE**, and **SELECT**. Futhermore, we will focus on the querying commands which is **SELECT** and its several derivatives. 

### CREATE
**CREATE** command used for creating a table. In general, the **CREATE** syntax are:
```mysql
CREATE TABLE TABLENAME(
    COLUMN1 datatype,
    COLUMN2 datatype,
    ...
    );
```

**For example:**
```mysql
CREATE TABLE teachers (
    id INT PRIMARY KEY ,
    first_name varchar(25),
    last_name varchar(50),
    school varchar(50),
    hire_date date,
    salary numeric
    );
```

You will have a table named teachers with empty columns like this:

|id|first_name|last_name|school|hire_date|salary|
|---|---|---|---|---|---|

To make the id or Primary key is auto incremental which means it's automatically filled based on the row order, you can add keyword AUTO_INCREMENT after keyword PRIMARY KEY just like this:

```mysql
CREATE TABLE teachers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(25),
    last_name varchar(50),
    school varchar(50),
    hire_date date,
    salary numeric
    );
```

However, SQLite uses `id INTEGER KEY AUTOINCREMENT` to make the primary key is auto incremental. Futhermore, it is slightly different in PostgreSQL. the keyword SERIAL is used to create columns that increment automatically. For example `id SERIAL PRIMARY KEY`.

There is another way to define a primary key, for example:

```mysql
CREATE TABLE teachers (
    id INT,
    first_name varchar(25),
    last_name varchar(50),
    school varchar(50),
    hire_date date,
    salary numeric,
    PRIMARY KEY (id)
    );
```

Also, you can define a foreign key with similar way:

```mysql
CREATE TABLE teachers (
    id INT,
    school_id INT,
    first_name varchar(25),
    last_name varchar(50),
    school varchar(50),
    hire_date date,
    salary numeric,
    PRIMARY KEY (id)
    FOREIGN KEY(school_id) REFERENCES School(school_id)
    );
```

'School' after keyword REFERENCES is a another table that have connection with the table.

### INSERT
**INSERT** command used for adding value(s)/row(s) into a table. In general, the **INSERT** syntax are:
```mysql
INSERT INTO Table_Name (colomn1,colomn2,...) VALUES (value1,value2,...);
```

**For example:**
```mysql
INSERT INTO teachers (id,first_name, last_name, school, hire_date, salary)
    VALUES (1,'Janet', 'Smith', 'F.D. Roosevelt HS', '2011-10-30', 36200),
           (2,'Lee', 'Reynolds', 'F.D. Roosevelt HS', '1993-05-22', 65000),
           (3,'Samuel', 'Cole', 'Myers Middle School', '2005-08-01', 43500),
           (4,'Samantha', 'Bush', 'Myers Middle School', '2011-10-30', 36200),
           (5,'Betty', 'Diaz', 'Myers Middle School', '2005-08-30', 43500),
           (6,'Kathleen', 'Roush', 'F.D. Roosevelt HS', '2010-10-22', 38500);
```

You will the result like this:

|id|first_name|last_name|school|hire_date|salary|
|---|---|---|---|---|---|
|1|Janet|Smith|F.D. Roosevelt HS|2011-10-30|36200|
|2|Lee|Reynolds|F.D. Roosevelt HS|1993-05-22|65000|
|3|Samuel|Cole|Myers Middle School|2005-08-01|43500|
|4|Samantha|Bush|Myers Middle School|2011-10-30|36200|
|5|Betty|Diaz|Myers Middle School|2005-08-30|43500|
|6|Kathleen|Roush|F.D. Roosevelt HS|2010-10-22|38500|

### UPDATE
**UPDATE** command used for changing the value of certain column(s) in a table. In general, the **UPDATE** syntax are:
```mysql
UPDATE Table_Name SET column1=value1 WHERE <condition>;
```

**For example:**
```mysql
UPDATE teachers
    SET salary=56000
    WHERE teachers.first_name='Samuel';
    
    #or

UPDATE teachers
    SET salary=56000
    WHERE teachers.id=3;   
```

Your table 'teachers' will updated on column salary row 3 from 43500 to 56000.

|id|first_name|last_name|school|hire_date|salary|
|---|---|---|---|---|---|
|1|Janet|Smith|F.D. Roosevelt HS|2011-10-30|36200|
|2|Lee|Reynolds|F.D. Roosevelt HS|1993-05-22|65000|
|3|Samuel|Cole|Myers Middle School|2005-08-01|**56000**|
|4|Samantha|Bush|Myers Middle School|2011-10-30|36200|
|5|Betty|Diaz|Myers Middle School|2005-08-30|43500|
|6|Kathleen|Roush|F.D. Roosevelt HS|2010-10-22|38500|

### DELETE
**DELETE** command used for removing certain row(s) or the whole table. In general, the syntax are:
```mysql
DELETE FROM Table_Name; #For removing the whole table

    #or
    
DELETE FROM Table_Name WHERE <conditions>; #For removing a certain row
```

**For Example:**
```mysql
DELETE FROM teachers; #For removing the whole table

    #or
    
DELETE FROM teachers
       WHERE id=6;    #For removing a certain row
```

The row 6 will be vanished from the table:

|id|first_name|last_name|school|hire_date|salary|
|---|---|---|---|---|---|
|1|Janet|Smith|F.D. Roosevelt HS|2011-10-30|36200|
|2|Lee|Reynolds|F.D. Roosevelt HS|1993-05-22|65000|
|3|Samuel|Cole|Myers Middle School|2005-08-01|56000|
|4|Samantha|Bush|Myers Middle School|2011-10-30|36200|
|5|Betty|Diaz|Myers Middle School|2005-08-30|43500|


### Querying Data Using *SELECT* Command

Here’s a **SELECT** statement that fetches every row and column in a table:
```mysql
SELECT * FROM Table_Name;
```

**For example:**
```mysql
SELECT * FROM teachers;
```

You will retrieve a table as shown below:

|id|first_name|last_name|school|hire_date|salary|
|---|---|---|---|---|---|
|1|Janet|Smith|F.D. Roosevelt HS|2011-10-30|36200|
|2|Lee|Reynolds|F.D. Roosevelt HS|1993-05-22|65000|
|3|Samuel|Cole|Myers Middle School|2005-08-01|43500|
|4|Samantha|Bush|Myers Middle School|2011-10-30|36200|
|5|Betty|Diaz|Myers Middle School|2005-08-30|43500|
|6|Kathleen|Roush|F.D. Roosevelt HS|2010-10-22|38500|

Using the asterisk wildcard is helpful for discovering the entire contents of a table. But often it’s more practical to limit the columns the query retrieves, especially with large databases. You can do this by naming columns, separated by commas, right after the SELECT keyword. For example:

```mysql
SELECT first_name,salary FROM teachers;
```
You will get a table as shown below:

|first_name|salary|
|---|---|
|Janet|36200|
|Lee|65000|
|Samuel|43500|
|Samantha|36200|
|Betty|43500|
|Kathleen|38500|

Sometimes you want to retrieve the columns but you want to change the name of the prior table. You can use alias to rename the columns like this:

```mysql
SELECT first_name as 'First Name',salary as 'Yearly Salary' FROM teachers;
```

and you will get:

|First Name|Yearly Salary|
|---|---|
|Janet|36200|
|Lee|65000|
|Samuel|43500|
|Samantha|36200|
|Betty|43500|
|Kathleen|38500|

In a table, it’s not unusual for a column to contain rows with duplicate values. In the teachers table, for example, the school column lists the same school names multiple times because each school employs many teachers. To understand the range of values in a column, we can use the DISTINCT keyword as part of a query that eliminates duplicates and shows only unique values. Use the **DISTINCT** keyword immediately after **SELECT**, as shown:

```mysql
SELECT DISTINCT School FROM teachers;
```
The result will be:

|School|
|---|
|F.D. Roosevelt HS|
|Myers Middle School|

The **DISTINCT** keyword also works on more than one column at a time. If we add a column, the query returns each unique pair of values. For example:

```mysql
SELECT DISTINCT School,Salary FROM teachers;
```

The result will be:

|School|Salary|
|---|---|
|Myers Middle School|43500|
|Myers Middle School|36200|
|F.D. Roosevelt HS|65000|
|F.D. Roosevelt HS|38500|
|F.D. Roosevelt HS|36200|

Data can make more sense, and may reveal patterns more readily, when it’s arranged in order rather than jumbled randomly. In SQL, we order the results of a query using a clause containing the keywords **ORDER BY** followed by the name of the column or columns to sort. Applying this clause doesn’t change the original table, only the result of the query. For example:

```mysql
SELECT first_name, last_name, salary
FROM teachers
ORDER BY salary DESC;
```

The result will be:

|first_name|last_name|salary|
|---|---|---|
|Lee|Reynolds|65000|
|Samuel|Cole|43500|
|Betty|Diaz|43500|
|Kathleen|Roush|38500|
|Janet|Smith|36200|
|Samantha|Bush|36200|

By default, ORDER BY sorts values in ascending order, but for the example above, sorted in descending order by adding the DESC keyword.

Sometimes, you’ll want to limit the rows a query returns to only those in which one or more columns meet certain criteria. This can be done by using **WHERE** keyword. The **WHERE** keyword allows you to find rows that match a specific value, a range of values, or multiple values based on criteria supplied via an operator. You also can exclude rows based on criteria. Note that in standard SQL syntax, the **WHERE** clause follows the FROM keyword and the name of the table or tables being queried:

```mysql
SELECT last_name, school, hire_date
FROM teachers
WHERE school = 'Myers Middle School';
```

The result set shows just the teachers assigned to Myers Middle School:

|last_name|school|hire_date|
|---|---|---|
|Cole|Myers Middle School|2005-08-01|
|Bush|Myers Middle School|2011-10-30|
|Diaz|Myers Middle School|2005-08-30|

Here, We're using the equals comparison operator to find rows that exactly match a value, but of course you can use other operators with **WHERE** to customize your filter criteria. Table below provides a summary of the most commonly used comparison operators. Depending on your database system, many more might be available.

|Operator|Function|Example|
|---|---|---|
|=|Equal to|WHERE school = 'Baker Middle'|
|<> or !=|Not equal to| WHERE school <> 'Baker Middle'|
|>|Greater than|WHERE salary > 20000|
|<|Less than|WHERE salary < 60500|
|>=|Greater than or equal to|WHERE salary >= 20000|
|<=|Less than or equal to|WHERE salary <= 60500|
|BETWEEN|Within a range|WHERE salary BETWEEN 20000 AND 40000|
|IN|Match one of a set of values|WHERE last_name IN ('Bush','Roush')|
|LIKE|Match a pattern (case sensitive)|WHERE first_name LIKE 'Sam%'|
|ILIKE|Match a pattern (case insensitive)|WHERE first_name ILIKE 'sam%'|
|NOT|Negates a condition|WHERE first_name NOT ILIKE 'sam%'|

Comparison operators become even more useful when we combine them. To do this, we connect them using keywords **AND** and **OR** along with, if needed, parentheses. For example:

```mysql
SELECT *
FROM teachers
WHERE school = 'Myers Middle School'
AND salary < 40000;

SELECT *
FROM teachers
WHERE last_name = 'Cole'
OR last_name = 'Bush';

SELECT *
FROM teachers
WHERE school = 'F.D. Roosevelt HS'
AND (salary < 38000 OR salary > 40000);
```

To connect tables in a query, we use a JOIN ... ON statement. The JOIN statement links one table to another in the database during a query, using matching values in columns we specify in both tables. The syntax takes this form:

```sql
SELECT *
FROM table_a JOIN table_b
ON table_a.key_column = table_b.foreign_key_column
```

for example:

```sql
SELECT * FROM teachers
    JOIN School
    ON teachers.school_id=School.school_id
```

There’s more than one way to join tables in SQL, and the type of join you’ll use depends on how you want to retrieve data. The following list describes the different types of joins. While reviewing each, it’s helpful to think of two tables side by side, one on the left of the JOIN keyword and the other on the right. A data-driven example of each join follows the list:
- **JOIN** Returns rows from both tables where matching values are found in the joined columns of both tables. Alternate syntax is **INNER JOIN**.
- **LEFT JOIN** Returns every row from the left table plus rows that match values in the joined column from the right table. When a left table row doesn’t have a match in the right table, the result shows no values from the right table.
- **RIGHT JOIN** Returns every row from the right table plus rows that match the key values in the key column from the left table. When a right table row doesn’t have a match in the left table, the result shows no values from the left table.
- **FULL OUTER JOIN** Returns every row from both tables and matches rows; then joins the rows where values in the joined columns match. If there’s no match for a value in either the left or right table, the query result contains an empty row for the other table.

The SQL JOIN can be illustrated in the picture below.
![image](https://yukcoding.id/wp-content/uploads/2018/01/belajar-join-sql.jpg)


## Using Python SQL Libraries to Connect to a Database

Before you interact with any database through a Python SQL Library, you have to connect to that database. In this section, you’ll see how to connect to SQLite, MySQL, and PostgreSQL databases from within a Python application.

It’s recommended that you create three different Python files, so you have one for each of the three databases. You’ll execute the script for each database in its corresponding file.

### SQLite

SQLite is probably the most straightforward database to connect to with a Python application since you don’t need to install any external Python SQL modules to do so. By default, your Python installation contains a Python SQL library named sqlite3 that you can use to interact with an SQLite database.

What’s more, SQLite databases are serverless and self-contained, since they read and write data to a file. This means that, unlike with MySQL and PostgreSQL, you don’t even need to install and run an SQLite server to perform database operations!

Here’s how you use sqlite3 to connect to an SQLite database in Python:

```py
import sqlite3
from sqlite3 import Error

def create_connection(path):
    connection = None
    try:
        connection = sqlite3.connect(path)
        print("Connection to SQLite DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection
```

Here’s how this code works:

- Lines 1 and 2 import sqlite3 and the module’s Error class.
- Line 4 defines a function .create_connection() that accepts the path to the SQLite database.
- Line 7 uses .connect() from the sqlite3 module and takes the SQLite database path as a parameter. If the database exists at the specified location, then a connection to the database is established. Otherwise, a new database is created at the specified location, and a connection is established.
- Line 8 prints the status of the successful database connection.
- Line 9 catches any exception that might be thrown if .connect() fails to establish a connection.
- Line 10 displays the error message in the console.

sqlite3.connect(path) returns a connection object, which is in turn returned by create_connection(). This connection object can be used to execute queries on an SQLite database. The following script creates a connection to the SQLite database:

```py
connection = create_connection("E:\\sm_app.sqlite")
```

Once you execute the above script, you’ll see that a database file sm_app.sqlite is created in the root directory. Note that you can change the location to match your setup.


### MySQL

Unlike SQLite, there’s no default Python SQL module that you can use to connect to a MySQL database. Instead, you’ll need to install a Python SQL driver for MySQL in order to interact with a MySQL database from within a Python application. One such driver is mysql-connector-python. You can download this Python SQL module with pip:

` $ pip install mysql-connector-python`


Note that MySQL is a server-based database management system. One MySQL server can have multiple databases. Unlike SQLite, where creating a connection is tantamount to creating a database, a MySQL database has a two-step process for database creation:

- Make a connection to a MySQL server.
- Execute a separate query to create the database.

Define a function that connects to the MySQL database server and returns the connection object:

```py
import mysql.connector
from mysql.connector import Error

def create_connection(host_name, user_name, user_password):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection

connection = create_connection("localhost", "root", "")
```

In the above script, you define a function create_connection() that accepts three parameters:

- host_name
- user_name
- user_password

The mysql.connector Python SQL module contains a method .connect() that you use in line 7 to connect to a MySQL database server. Once the connection is established, the connection object is returned to the calling function. Finally, in line 18 you call create_connection() with the host name, username, and password.

So far, you’ve only established the connection. The database is not yet created. To do this, you’ll define another function create_database() that accepts two parameters:

- connection is the connection object to the database server that you want to interact with.
- query is the query that creates the database.

Here’s what this function looks like:

```py
def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Database created successfully")
    except Error as e:
        print(f"The error '{e}' occurred")
```

To execute queries, you use the cursor object. The query to be executed is passed to cursor.execute() in string format.

Create a database named sm_app for your social media app in the MySQL database server:

```py
create_database_query = "CREATE DATABASE sm_app"
create_database(connection, create_database_query)
```

Now you’ve created a database sm_app on the database server. However, the connection object returned by the create_connection() is connected to the MySQL database server. You need to connect to the sm_app database. To do so, you can modify create_connection() as follows:

```py
def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection
```

You can see in line 8 that create_connection() now accepts an additional parameter called db_name. This parameter specifies the name of the database that you want to connect to. You can pass in the name of the database you want to connect to when you call this function:

`connection = create_connection("localhost", "root", "", "sm_app")`

The above script successfully calls create_connection() and connects to the sm_app database.


### PostgreSQL

Like MySQL, there’s no default Python SQL library that you can use to interact with a PostgreSQL database. Instead, you need to install a third-party Python SQL driver to interact with PostgreSQL. One such Python SQL driver for PostgreSQL is psycopg2. Execute the following command on your terminal to install the psycopg2 Python SQL module:

`$ pip install psycopg2`

Like with the SQLite and MySQL databases, you’ll define create_connection() to make a connection with your PostgreSQL database:

```py
import psycopg2
from psycopg2 import OperationalError

def create_connection(db_name, db_user, db_password, db_host, db_port):
    connection = None
    try:
        connection = psycopg2.connect(
            database=db_name,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port,
        )
        print("Connection to PostgreSQL DB successful")
    except OperationalError as e:
        print(f"The error '{e}' occurred")
    return connection
```

You use psycopg2.connect() to connect to a PostgreSQL server from within your Python application.

You can then use create_connection() to create a connection to a PostgreSQL database. First, you’ll make a connection with the default database postgres by using the following string:

```py
connection = create_connection(
    "postgres", "postgres", "abc123", "127.0.0.1", "5432"
)
```

Next, you have to create the database sm_app inside the default postgres database. You can define a function to execute any SQL query in PostgreSQL. Below, you define create_database() to create a new database in the PostgreSQL database server:

```py
def create_database(connection, query):
    connection.autocommit = True
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Query executed successfully")
    except OperationalError as e:
        print(f"The error '{e}' occurred")

create_database_query = "CREATE DATABASE sm_app"
create_database(connection, create_database_query)
```

Once you run the script above, you’ll see the sm_app database in your PostgreSQL database server.

Before you execute queries on the sm_app database, you need to connect to it:

```py
connection = create_connection(
    "sm_app", "postgres", "abc123", "127.0.0.1", "5432"
)
```

Once you execute the above script, a connection will be established with the sm_app database located in the postgres database server. Here, 127.0.0.1 refers to the database server host IP address, and 5432 refers to the port number of the database server.


## Execute an SQL Script Using Python SQL Libraries

### SQLite and MySQL

To execute queries in SQLite, MySQL, and PostgreSQL, use cursor.execute(). In this section, you’ll define a function execute_query() that uses this method. Your function will accept the connection object and a query string, which you’ll pass to cursor.execute().

.execute() can execute any query passed to it in the form of string. You’ll use this method to create tables in this section. In the upcoming sections, you’ll use this same method to execute update and delete queries as well.

Note: This script should be executed in the same file where you created the connection for your SQLite database. Moreover, You’ll use the mysql-connector-python Python SQL module to create tables in MySQL and psycopg2 for PostgreSQL.

You can create another function execute_query() that accepts the connection and query string:

```py
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")
```

In line 4, you pass the query to cursor.execute().

Now you can execute any queries, for example to create your users table in MySQL database like this:

```py
create_users_table = """
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT, 
  name TEXT NOT NULL, 
  age INT, 
  gender TEXT, 
  nationality TEXT, 
  PRIMARY KEY (id)
) ENGINE = InnoDB
"""

execute_query(connection, create_users_table)
```

It's important to be concerned that to reading the SELECT result using Python, it has slightly different in writing the function. In order to read all rows in the record, we use .fetchall() on the cursor. The function will be like this:

```py
def select_query(conn,query):

    cur = conn.cursor()
    cur.execute(query)

    rows = cur.fetchall()

    for row in rows:
        print(row)
```

For example:

```py
Q="SELECT * from users"
select_query(conn,Q)
```

Results:
```
(1, 'James', 25, 'male', 'USA')
(2, 'Leila', 32, 'female', 'France')
(3, 'Brigitte', 35, 'female', 'England')
(4, 'Mike', 40, 'male', 'Denmark')
(5, 'Elizabeth', 21, 'female', 'Canada')
```

## Read SELECT Record Using Pandas

In order to make we convinient in processing the data, we can store the sql SELECT record into a pandas dataframe. Pandas has provided `pandas.read_sql_query(query,connection)`. 'Connection' argument can be filled by our create_connection function.

Here is the example to use `pandas.read_sql_query`.

```py
dat=pd.read_sql_query("select * from users",conn)
dat
```

The result will be:

||id|name|age|gender|nationality|
|--|--|--|--|--|--|
|0|1|James|25|male|USA|
|1|2|Leila|32|female|France|
|2|3|Brigitte|35|female|England|
|3|4|Mike|40|male|Denmark|
|4|5|Elizabeth|21|female|Canada|


