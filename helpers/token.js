import jwt from "jsonwebtoken";

const generateToken = (_id) =>{

    const token = jwt.sign({_id}, "secret", {expiresIn:'1d'});

    return token;
}

export default generateToken;