export default function handler(req, res) {
    if (req.method === 'POST') {
      const { data } = req.body; // Access the data from the request body
      // Process the data and perform any required operations
  
      res.status(200).json({ message: 'POST request successful' });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  