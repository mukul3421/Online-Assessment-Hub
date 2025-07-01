import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user document
    const user = new User({ 
      username, 
      password: hashedPassword 
    });
    
    // Save the user to the database
    await user.save();
    
    // Respond with a success message
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({ error: "User registration failed", details: error.message });
  }
};


const facultyUsers = [
  { username: "faculty1", password: bcrypt.hashSync("facultyPassword1", 10), role: "faculty" },
  { username: "faculty2", password: bcrypt.hashSync("facultyPassword2", 10), role: "faculty" },
  // Add more faculty users with hashed passwords
];

export const login = async (req, res) => {
  console.log("Request body:", req.body);
  const { username, password, role } = req.body;

  try {
    if (role === "faculty") {
      // Check if user is a faculty member
      const facultyUser = facultyUsers.find(user => user.username === username);
      if (!facultyUser) return res.status(404).json({ error: "Faculty user not found." });

      // Verify faculty password
      const isMatch = await bcrypt.compare(password, facultyUser.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid password." });

      // Generate token for faculty
      const token = jwt.sign({ username: facultyUser.username, role: facultyUser.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return res.json({ message: "Faculty logged in successfully", token });
    } 
    
    if (role === "student") {
      // Proceed with student login by checking the database
      const studentUser = await User.findOne({ username });
      if (!studentUser) return res.status(404).json({ error: "User not found." });

      // Verify student password
      const isMatch = await bcrypt.compare(password, studentUser.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid password." });

      // Generate token for student
      const token = jwt.sign({ id: studentUser._id, role: studentUser.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return res.json({ message: "Student logged in successfully", token });
    }

    // If role is not recognized
    res.status(400).json({ error: "Invalid role specified." });
    
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed." });
  }
};