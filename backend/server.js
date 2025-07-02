const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = 5001;

// Detailed logging middleware
app.use((req, res, next) => {
  console.log(`
  ===== REQUEST RECEIVED =====
  Method: ${req.method}
  Path: ${req.path}
  Time: ${new Date().toISOString()}
  `);
  next();
});

// CORS with expanded configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing with error handling
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf.toString());
    } catch (e) {
      console.error('Invalid JSON Parsing Error:', e);
      throw new Error('Invalid JSON');
    }
  }
}));

// Ensure submissions directory
const submissionsDir = path.join(__dirname, 'submissions');
const submissionsFile = path.join(submissionsDir, 'submissions.json');

// Create directories if they don't exist
if (!fs.existsSync(submissionsDir)) {
  fs.mkdirSync(submissionsDir, { recursive: true });
}

// Initialize submissions file
if (!fs.existsSync(submissionsFile)) {
  fs.writeJsonSync(submissionsFile, []);
}

// Preflight/OPTIONS handler
app.options('/api/contact', cors());

// Nodemailer Transporter Setup (example with Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'neurotechtester@gmail.com', // your email address
    pass: 'NeuroUofT3000',   // your email password or app-specific password
  },
});

// Contact form endpoint with EXTENSIVE logging
app.post('/api/contact', async (req, res) => {
  console.log('=================== FULL REQUEST START ===================');
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Raw Body:', JSON.stringify(req.body, null, 2));

  try {
    // Deep validation with detailed logging
    const { name, email, message } = req.body;

    console.log('Extracted Data:', { name, email, message });

    // Comprehensive validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      console.error('Invalid Name:', name);
      return res.status(400).json({ 
        message: 'Name is required and must be at least 2 characters',
        receivedName: name
      });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error('Invalid Email:', email);
      return res.status(400).json({ 
        message: 'Valid email is required',
        receivedEmail: email
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      console.error('Invalid Message:', message);
      return res.status(400).json({ 
        message: 'Message is required and must be at least 5 characters',
        receivedMessage: message
      });
    }

    // Prepare submission
    const submission = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    console.log('Prepared Submission:', submission);

    // Read existing submissions
    let submissions = [];
    try {
      submissions = await fs.readJson(submissionsFile);
    } catch (readError) {
      console.error('File Read Error:', readError);
    }

    // Add new submission
    submissions.push(submission);

    // Write submissions
    try {
      await fs.writeJson(submissionsFile, submissions, { spaces: 2 });
      console.log('Submission Successfully Saved');
    } catch (writeError) {
      console.error('File Write Error:', writeError);
      return res.status(500).json({ 
        message: 'Could not save submission',
        error: writeError.message 
      });
    }

    // Send email to Neurotech UofT
    const mailOptions = {
      from: 'neurotechtester@gmail.com', // Sender address
      to: 'info@neurotechuoft.com', // Receiver address (Neurotech UofT's email)
      subject: 'New Contact Form Submission', // Subject of the email
      text: `You have received a new message from ${name} (${email}):\n\nMessage: ${message}`, // Message body
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email Sending Error:', emailError);
      return res.status(500).json({
        message: 'Message received but failed to send email notification. Please try again later.',
        errorDetails: emailError.message
      });
    }

    console.log('=================== PROCESSING COMPLETE ===================');

    // Success response
    res.status(200).json({ 
      message: 'Submission received successfully',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('CATASTROPHIC ERROR:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });

    res.status(500).json({ 
      message: 'Unexpected error processing submission', 
      errorDetails: error.message 
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    message: 'Critical server error',
    error: err.message
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Submissions will be saved to: ${submissionsFile}`);
});
