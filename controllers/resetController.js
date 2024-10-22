const resetController = async() => {
    const { token } = req.params;
    
    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        res.json({ message: 'Token is valid', userId: decoded.id });
    } catch (err) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }
}
export default resetController;