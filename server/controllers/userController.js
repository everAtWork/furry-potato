const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id,email,role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn:'18h'})    
}
class UserController {
    async signup(req,res){
        const {email, password,role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('your password or email is wrong'))
            const candidate = await User.findOne({where: {email}})
        }
            if (candidate) {
                return next(ApiError.badRequest('The email is already in use, wanna login?'))
                const hashPassword = await bcrypt.hash(password,5)
                const user = await User.create({role,email,password: hashPassword})
                const basket = await Basket.create({userId: user.id})
                const token = generateJwt(user.id,email,role)
            }
    return res.json({token})
    }
    async login(req,res,next){
        const {email, password} = req.body 
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Úsèr nöt fóûnd!'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Wrong password!'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }



    async check(req,res,next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('No ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()           