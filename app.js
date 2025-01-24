const express = require('express');
const app= express();
const engine = require('ejs-mate');
const task = require('./router/task');
const user = require('./router/user');
const mongoose= require('mongoose');
const dotenv = require('dotenv').config();
const DbUrl= process.env.DbUrl;
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize for MySQL/PostgreSQL
const sequelize = new Sequelize('task', process.env.username, process.env.password, {
  host: process.env.localhost,
  dialect: 'mysql',  // or 'postgres'
});
mongoose.connect(DbUrl)
.then(()=>{
    console.log("connection open :)");
}).catch((err)=>{
    
console.log("connection refused!! Try Again :(");
});
app.engine('ejs',engine);
app.set('view engine','ejs');
app.use('/',task);
app.use('/',user);
app.listen('3000',(req,res)=>{
    console.log('listening');
})