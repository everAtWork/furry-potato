const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})


const Basket = sequelize.define('basket', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketDevice = sequelize.define('basket-device', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


const Device = sequelize.define('device', {
    id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique: true, allowNull: false},
    price: { type: DataTypes.INTEGER, unique: true, allowNull: false},
    rating: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    img: { type: DataTypes.STRING, allowNull: false}
})


const Type = sequelize.define('type', {
id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
name: {type: DataTypes.STRING, unique: true, autoIncrement: true}
})
const Brand = sequelize.define('brand', {
id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
name: {type: DataTypes.STRING, unique: true, autoIncrement: true}
})
const Rating = sequelize.define('rating', {
id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
rate: {type: DataTypes.STRING, allowNull: false}
})
const DeviceInfo = sequelize.define('device-info', {
id: {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
title: {type: DataTypes.STRING, allowNull: false},
description: {type: DataTypes.STRING, allowNull: false}
})