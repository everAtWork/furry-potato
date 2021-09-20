const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Device, DeviceInfo} = require('../models/models')
const { nextTick } = require('process')
const { Where } = require('sequelize/types/lib/utils')
const { JSON } = require('sequelize/types')


class DeviceController {
    async create(req,res){
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title = i.title,
                        description = i.description,
                        deviceId = device.id
                    })
                });
            }
            
            return res.json(device)
            
    } catch (e) {
        nextTick(ApiError.badRequest(e.msg))
    }
}
    async getAll(req,res){
        let {brandId, typeId, limit, page} = req.query // + текущая страница, +лимит
        let devicesGotten // возвращаемое
        page = page || 1
        limit = limit || 20 
        let offset = page * limit - limit
        if (!brandId && !typeId) {
            devicesGotten = Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {   
            devicesGotten = Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devicesGotten = Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devicesGotten = Device.findAndCountAll({where:{brandId, typeId},limit, offset})
        }
        return res.json(devicesGotten)
    }
    async getSingleDevice(req,res){
    const {id} = req.params
    const device = await Device.findOne({
        where:{id},
        include:[{model:DeviceInfo, as: 'info'}]
    })
    return res.json(device)
    }
}

module.exports = new DeviceController()