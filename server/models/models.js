const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})


const Basket = sequelize.define('user', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketDevice = sequelize.define('user', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


const Device = sequelize.define('user', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique: true, allowNull: false},
    price: { type: DataTypes.INTEGER, unique: true, allowNull: false},
    rating: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    img: { type: DataTypes.STRING, allowNull: false}
})