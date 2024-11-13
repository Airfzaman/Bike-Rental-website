import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Validate request body fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    let client;

    try {
      // Connect to MongoDB using the URI from environment variables
      client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();

      const contactsCollection = db.collection('contacts');
      const result = await contactsCollection.insertOne({
        name,
        email,
        phone,
        message,
        submittedAt: new Date(),
      });

      res.status(201).json({ message: 'Contact saved successfully', contactId: result.insertedId });
    } catch (error) {
      console.error('Contact submission error:', error); // Log the error for debugging
      res.status(500).json({ message: 'Failed to save contact. Please try again.' });
    } finally {
      if (client) {
        await client.close(); // Ensure the client connection is closed
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
