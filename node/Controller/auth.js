const Users = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    // check user
    const { name, password } = req.body;
    var user = await Users.findOne({ name });

    if (user) {
      return res.send("User mee leaw");
    }
    // Encrypt
    const salt = await bcrypt.genSalt(10);
    user = new Users({
      name,
      password,
    });
    user.password = await bcrypt.hash(password, salt);
    console.log(user);
    // Save
    await user.save();

    res.send("Register susses");
  } catch (err) {
    console.log(err);
  }
};
exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    var user = await Users.findOneAndUpdate({ name }, { new: true });
    console.log(user);
    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.send("Password mai tong");
      }

      var payload = {
        user: {
          name: user.name,
        },
      };

      jwt.sign(payload,'jwtsecret',{ expiresIn:30 },(err,token)=>{
        if(err) throw err;
        res.json({token,payload})
      })
    
    }else{
        return res.send('user mai mee')
    }
  } catch (err) {
    console.log(err);
  }
};
