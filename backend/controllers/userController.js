class userController {
    async registration(req, res){

    }
    async login(req,res){

    }
    async check(req,res){
        res.json({message: 'Hello there'})
    }
}

module.exports = new userController();
