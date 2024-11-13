import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, startDate, endDate, bikeId } = req.body;

    // Validate request body fields
    if (!name || !email || !startDate || !endDate || !bikeId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    let client;

    try {
      // Connect to MongoDB using the URI from environment variables
      client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();

      const bookingCollection = db.collection('bookings');
      const result = await bookingCollection.insertOne({
        name,
        email,
        startDate,
        endDate,
        bikeId,
        bookingDate: new Date(),
      });

      res.status(201).json({ message: 'Booking successful', bookingId: result.insertedId });
    } catch (error) {
      console.error('Booking error:', error); // Log the error for debugging
      res.status(500).json({ message: 'Booking failed. Please try again.' });
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
