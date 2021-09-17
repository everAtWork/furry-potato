const { noExtendLeft } = require("sequelize/types/lib/operators")
const ApiError = require('../error/ApiError')
class UserController {
    async signup(req,res){
        
    }
    async login(req,res){

    }
    async check(req,res,next){
        if(!id){
           return next(ApiError.badRequest('No ID'))
        }
    }
}

module.exports = new UserController()