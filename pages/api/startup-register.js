// pages/api/startup-register.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log('Received startup registration:', req.body);
      res.status(200).json({ message: 'Registered' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  