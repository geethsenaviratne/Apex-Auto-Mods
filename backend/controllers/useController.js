import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export async function registerUser(req, res) {
  
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ 
        message: 'Email already exists' 
      });
      return;
    }

    // Hash password
    const passwordHash = bcrypt.hashSync(password, 10);

    // Create and save user
    const user = new User({ name, email, passwordHash });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
}


export async function loginUser(req, res) {

  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    // Compare password
    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isPasswordValid) {
      res.status(400).json({ message: 'Invalid password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Login successful',
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Error logging in', error: error.message 
    });
  }
}


export async function getProfile(req, res) {

  try {
    // req.user is set by auth middleware
    const user = await User.findById(req.user.userId).select('-passwordHash');
    if (!user) {
      res.status(404).json({ 
        message: 'User not found' 
      });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching profile', error: error.message 
    });
  }
}