import bcrypt from "bcryptjs";

const users = [
    {
        name : "Admin User",
        email : "admin@example.com",
        password : bcrypt.hashSync("123456",10),
        isAdmin : true
    },
    {
        name : "Akshay",
        email : "akshay@example.com",
        password : bcrypt.hashSync("12345678",10),
       
    },
    {
        name : "Smile",
        email : "smile@example.com",
        password : bcrypt.hashSync("1234567890", 10),
        
    }

]

export default users;