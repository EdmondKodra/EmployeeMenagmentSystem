import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems",
    port: "4306"
})

con.connect(function(err){
    if(err){
        console.log("Connection error:", err.message);
    }
    else{
        console.log("Connected to MySQL");
    }
})
export default con; 
