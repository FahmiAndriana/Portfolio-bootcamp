const UserModel = require('../models/user');

class UserController {
  static getUser (req,res) {
    UserModel.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
  static postUser (req, res) {
    UserModel.create ({
      name: req.body.name,
      title: req.body.title,
      desc: req.body.desc,
      desc_bl: req.body.desc_bl,
      desc_cmo: req.body.desc_cmo,
      desc_gk: req.body.desc_gk,
      desc_sa_btn: req.body.desc_sa_btn,
      desc_sa_pst: req.body.desc_sa_pst
    })
    .then ((user) => res.send(user))
    .catch ((err) => res.status(500).send(err));
  }
};

module.exports = UserController;