import User from "../models/UserSchema";
import jwt from 'jsonwebtoken'
const fogotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' });
    console.log(token)
    // Optionally, send an email with the token (Use nodemailer)
    // const resetLink = `http://yourapp.com/reset-password/${token}`;

    res.json({ message: 'Reset link sent to your email', token });  // In prod, don't send token directly.
}
export default fogotPassword;