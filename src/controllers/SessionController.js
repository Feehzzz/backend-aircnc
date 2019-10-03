const User = require('../models/Users.model');

module.exports = {
 async store(req,res){
    const { email } = req.body;
    let user = await User.findOne({ email });
    if(!email){
      return res.status(400).json({ error: "Error during requisition"})
    }
    if(!user){
      user = await User.create({ email });
    }

    return res.json(user)
  },

  async index(req,res){
    const user = await User.find()
    return res.json(user)
  }
};