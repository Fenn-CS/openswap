const User = require("../Models/User");
const Trade = require('../Models/Trade')

class CryptoCurrencyController {
    index(req, res, next) {
        res.json({ cryptos: [], data: [] })
    }

    
     getListOfAllBuyers(req, res) {
     
        User.findAll().then(user => {
        user.forEach(element => {
            const {password, createdAt, updatedAt, ...others} = element.toJSON();
           
            res.status(200).json(others)
        })
          
      }).catch(err => {
          res.status(500).json({message: err.message})
      })

    }
    
    async getBuyer(req, res, next){
        try {
            User.hasOne(Trade, {foreignKey: 'user_id'})

            let user = await User.findOne({
                where: {id: req.params.id},
                include:[
                    {
                        model:Trade
                    }
                ]
            })

            if(!user) return res.status(401).json({message: 'can not get this user'})
            

            const {createdAt, updatedAt, password, ...other} = user.toJSON()

            next(other)
            // res.status(200).json(other)
            // console.log(other);
        } catch (error) {
            res.status(500).json({message: error})
        }

    }

    calculateAmount(amount, rate) {return amount*rate}

    getSellersRate(req, res, next) {

        next()
    }   
}


module.exports = new CryptoCurrencyController()
