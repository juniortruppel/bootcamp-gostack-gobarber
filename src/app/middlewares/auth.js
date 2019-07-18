import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // Transforms a callback function in an async/await function
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization; // Takes the token that comes from the bearer token

  if (!authHeader) {
    return res.status(401).json({ error: `Token not provided` });
  }

  // authHeader is the Bearer + token, it comes like "Bearer daofbaoifbaoifbwarba354fafa6fa4"
  // Split divide into 2 differents consts by the space that exists between the authHeader
  // const [bearer, token] = authHeader.split(' ');
  // THe code above can be replaced by the code below, this desegregation eliminates the word "bearer" and retains only the token
  const [, token] = authHeader.split(' ');

  try {
    // Inside the promisify parentheses goes the method that we wanted to promisify
    // Inside the other parentheses goes the token and the secret, the line code below try to decipher the token
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id; // Takes the payload from the token

    return next();
  } catch (err) {
    return res.status(401).json({ error: `Invalid Token` });
  }
};
