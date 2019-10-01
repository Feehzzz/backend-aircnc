const Spot = require('../models/Spot.model');
const User = require('../models/Users.model');


module.exports =  { 

  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({techs: tech});
    return res.json(spots);
  },
  async store(req,res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);

    if(!user){
      return res.status(401).json({Error: "Usuário não existe"});
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company: company.toLowerCase(),
      techs: techs.split(',').map(tech => tech.trim().toLowerCase()),
      price
    })
    return res.json(spot)
  },
};