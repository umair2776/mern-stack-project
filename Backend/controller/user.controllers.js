const User=require("../models/user.model")
const bcrypt=require("bcrypt")
const salt=10;
const jwt =require("jsonwebtoken")


exports.userRegister = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        // req.body.password=hashPassword
        if (!name || !email || !password || !confirmPassword || !phone ) {
            return res.status(400).json({ message: "Please fill all fields", success: false });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashPassword=await bcrypt.hash(password,salt)

        const user = await User.create({name,email,password:hashPassword,confirmPassword:hashPassword,phone });

        console.log("Signup",hashPassword);
        

        return res.status(200).json({
            message: "User registered successfully!",
            user
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};
exports.userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields", success: false });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Invalid email or password", success: false });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password", success: false });
      }
  
      if (user.isLoggedOut) {
        return res.status(403).json({ message: "You have been logged out and cannot log in again", success: false });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
      console.log("token",token);
      return res.status(200).json({
        message: "Login successful",
        success: true,token:token,
        user
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server Error", success: false });
    }
  };
  

exports.userLogout = async (req, res) => {
    try {
        const { email } = req.body; // Frontend se email lenge
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        user.isLoggedOut = true; // Logout flag update
        await user.save();

        return res.status(200).json({
            message: "Logout successful. You cannot log in again.",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error", success: false });
    }
};

