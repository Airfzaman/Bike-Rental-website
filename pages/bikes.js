import Navbar from '../components/Navbar';
import BikeCard from '../components/BikeCard';

const bikesData = [
  { id: '1', name: 'Royal Enfield Himalayan 450', price: 200, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
  { id: '2', name: 'Hero Xpulse 200 4V', price: 20, image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fhero%2Fxpulse-200-4v%2Fhero-xpulse-200-4v-matt-nexus-blue.jpg%3Fv%3D1659429824&w=640&q=75' },
  { id: '3', name: 'Royal Enfield Himalayan BS6', price: 20, image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Himalayan_New.png?size=690:388' },
  { id: '4', name: 'FZ', price: 20, image: 'https://imgd.aeplcdn.com/664x374/n/bw/models/colors/yamaha-select-model-matte-cyan-1704801979162.png?q=80' },
  { id: '5', name: 'KTM', price: 20, image: 'https://www.cycleworld.com/resizer/whvfWL-rH7y033ErG5bWDyRSwKM=/200x134/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/Z65JFTFFT5HIFMZYOAJYUR2TOY.jpg' },
  { id: '6', name: 'Ntorque Scooty', price: 20, image: 'https://images.drivespark.com/webp/fit-in/750x550/bikes-photos/models/tvsntorq_1667808752.jpg' },
  { id: '7', name: 'Dio Scooty', price: 20, image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/152887/honda-dio-125-right-side-view0.jpeg?isig=0' },
  { id: '8', name: 'Yammaha Zr', price: 25, image: 'https://www.perfectriders.in/wp-content/uploads/2021/10/color-01-drum.png' },
  { id: '9', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '10', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '11', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '12', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '13', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '14', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '15', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '16', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '17', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '18', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  { id: '19', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
  // Add more bikes here
];

export default function Bikes() {
  return (
    <div>
      <Navbar />
      <section id="bikes">
        <h2>Available Bikes</h2>
        <div className="bike-list">
          {bikesData.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>
    </div>
  );
}
