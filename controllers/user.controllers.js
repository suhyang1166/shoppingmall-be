const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {};

userController.createUser = async (req, res) => {
  try {
    let { email, password, name, level } = req.body;

    // 사용자 확인
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }

    // 비밀번호 해싱
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);

    // 새로운 사용자 생성
    const newUser = new User({
      email,
      password,
      name,
      level: level ? level : "customer",
    });

    // 사용자 저장
    await newUser.save();

    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: error.message });
  }
};

module.exports = userController;
