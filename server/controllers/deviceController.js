const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Device} = require('../models/models')
const { nextTick } = require('process')


class DeviceController {
    async create(req,res){
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
            
    } catch (e) {
        nextTick(ApiError.badRequest(e.msg))
    }
}
    async getAll(req,res){

    }
    async getSingleDevice(req,res){
        // const query = req.query
        // res.json(query)
    }
}

module.exports = new  DeviceController()