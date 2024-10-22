import bcrypt from 'bcrypt'
const updatePassword = async(req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    
    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        return res.status(400).json({ message: 'Failed to reset password' });
    }
}
export default updatePassword;