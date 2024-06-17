const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretkey="hsdhskisokjdsnkjcdhsnkihwndikhwksdnwhndwhd";

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretkey, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports=verifyToken;
