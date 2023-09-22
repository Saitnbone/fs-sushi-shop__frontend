const ApiError = require('../errors/apiErrors')
const bcrypt = require('bcrypt') // шифровальщик токена с информацией
const jwt = require('jsonwebtoken') // Стандарт, который используется для формирования токена с информацией о пользователе
const {User, CartUser} = require('../models/models')

const generateJwt =(id, name, email, role)=>{
    return jwt.sign(
        {id, name, email, role}, 
        process.env.SECRET_KEY, {expiresIn: '24h'}
        )
}

class userController {
    async registration(req, res, next){
        const {email, name, password, role} = req.body
        if(!email || !password){
            return  next(ApiError.badRequest("Wrong login or password"))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest("A user with this email already exists"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, name, role, password: hashPassword})
        const userCart = CartUser.create({userId: user.id})
        const token = generateJwt(user.id, user.name, user.email, user.role) 
        return res.json({token})
    }
    async login(req,res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal("The user with the specified email does not exist"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal("Password is incorrect"))
        }
        const token = generateJwt(user.id, user.name, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.name, req.user.role)
        return res.json({token})
    }
}

module.exports = new userController();
