import React from 'react';
import Slider from 'react-slick';
import TempleCard from './TempleCard';
// import { temples } from '../data/temples'; // Import the temple data

 // Define the data for the 12 Jyotirlingas
// Define the data for the 12 Jyotirlingas
// src/data/temples.js
export const temples = [
  {
    name: "Somnath",
    location: "Prabhas Patan, Saurashtra, Gujarat",
    openingTiming: "6:00 AM - 9:00 PM",
    closingTiming: "N/A",
    importantDates: ["Maha Shivaratri", "Navaratri"],
    prashad: "Basmati Rice, Coconut",
    establishment: "First Jyotirlinga",
    keyInformation: "Somnath is the first Jyotirlinga and is one of the 12 Jyotirlinga shrines dedicated to Shiva.",
    image: "/images/somnath.png", // Image path
    coordinates: { lat: 20.8880, lng: 70.4010 } // Latitude and Longitude
  },
  {
    name: "Mallikarjuna",
    location: "Srisailam, Andhra Pradesh",
    openingTiming: "6:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Maha Shivaratri", "Srisailam Brahmotsavam"],
    prashad: "Rice and Jaggery",
    establishment: "Second Jyotirlinga",
    keyInformation: "Located on the Srisailam hills, Mallikarjuna is also known for its association with the legend of Shiva and Parvati.",
    image: "/images/mallikarjuna.png", // Image path
    coordinates: { lat: 16.0726, lng: 78.8689 } // Latitude and Longitude
  },
  {
    name: "Mahakaleshwar",
    location: "Ujjain, Madhya Pradesh",
    openingTiming: "4:00 AM - 11:00 PM",
    closingTiming: "N/A",
    importantDates: ["Mahashivaratri", "Bhasma Aarti"],
    prashad: "Ladoo, Milk",
    establishment: "Third Jyotirlinga",
    keyInformation: "Mahakaleshwar is renowned for its Bhasma Aarti, which is performed every morning.",
    image: "/images/mahakaleshwar.png", // Image path
    coordinates: { lat: 23.1825, lng: 75.7683 } // Latitude and Longitude
  },
  {
    name: "Omkareshwar",
    location: "Khandwa, Madhya Pradesh",
    openingTiming: "6:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Maha Shivaratri", "Navaratri"],
    prashad: "Chana Dal, Rice",
    establishment: "Fourth Jyotirlinga",
    keyInformation: "Omkareshwar is situated on an island in the Kaveri River and is known for its Om-shaped island.",
    image: "/images/omkareshwar.png", // Image path
    coordinates: { lat: 22.2411, lng: 76.0471 } // Latitude and Longitude
  },
  {
    name: "Kedarnath",
    location: "Kedarnath, Uttarakhand",
    openingTiming: "4:00 AM - 9:00 PM",
    closingTiming: "N/A",
    importantDates: ["Kedarnath Yatra", "Maha Shivaratri"],
    prashad: "Kedarnath Prashad",
    establishment: "Fifth Jyotirlinga",
    keyInformation: "Kedarnath is one of the most revered Jyotirlingas and is situated in the Himalayas.",
    image: "/images/kedarnath.png", // Image path
    coordinates: { lat: 30.7346, lng: 79.0669 } // Latitude and Longitude
  },
  {
    name: "Baidyanath",
    location: "Vaijnath, Jharkhand",
    openingTiming: "5:00 AM - 9:00 PM",
    closingTiming: "N/A",
    importantDates: ["Shravan Month", "Maha Shivaratri"],
    prashad: "Ladoo, Rice",
    establishment: "Sixth Jyotirlinga",
    keyInformation: "Baidyanath is known for its ancient temples and is considered a significant pilgrimage site.",
    image: "/images/vaidyannath.png", // Image path
    coordinates: { lat: 24.4811, lng: 86.6995 } // Latitude and Longitude
  },
  {
    name: "Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh",
    openingTiming: "4:00 AM - 11:00 PM",
    closingTiming: "N/A",
    importantDates: ["Maha Shivaratri", "Ganga Aarti"],
    prashad: "Peda, Milk",
    establishment: "Seventh Jyotirlinga",
    keyInformation: "kashi Vishwanath is located in Varanasi, one of the oldest cities in the world.",
    image: "/images/kashivish.jpeg", // Image path
    coordinates: { lat: 25.3109, lng: 83.0104 } // Latitude and Longitude
  },
  {
    name: "Rameshwar",
    location: "Rameswaram, Tamil Nadu",
    openingTiming: "5:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Rama Navami", "Maha Shivaratri"],
    prashad: "Panchamirtham",
    establishment: "Eighth Jyotirlinga",
    keyInformation: "Rameshwar is located in Rameswaram and is linked to the epic Ramayana.",
    image: "/images/rameshwar.png", // Image path
    coordinates: { lat: 9.2881, lng: 79.3129 } // Latitude and Longitude
  },
  {
    name: "Nageshwar",
    location: "Dwarka, Gujarat",
    openingTiming: "6:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Maha Shivaratri", "Dwarka Festival"],
    prashad: "Ladoo, Rice",
    establishment: "Ninth Jyotirlinga",
    keyInformation: "Nageshwar is known for its association with Lord Krishna and the town of Dwarka.",
    image: "/images/nageshwar.png", // Image path
    coordinates: { lat: 22.0065, lng: 69.0737 } // Latitude and Longitude
  },
  {
    name: "Vaidyanath",
    location: "Vaijnath, Jharkhand",
    openingTiming: "5:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Shravan Month", "Maha Shivaratri"],
    prashad: "Ladoo, Rice",
    establishment: "Tenth Jyotirlinga",
    keyInformation: "Vaidyanath is known for its ancient temples and is considered a significant pilgrimage site.",
    image: "/images/vaidyannath.png", // Image path
    coordinates: { lat: 24.4801, lng: 86.7025 } // Latitude and Longitude
  },
  {
    name: "Aundha Nagnath",
    location: "Aundha, Hingoli, Maharashtra",
    openingTiming: "6:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Maha Shivaratri", "Shravan Month"],
    prashad: "Ladoo, Milk",
    establishment: "Eleventh Jyotirlinga",
    keyInformation: "Aundha Nagnath is situated in Maharashtra and is a revered Jyotirlinga shrine.",
    image: "/images/AundhaNagnath.jpeg", // Image path
    coordinates: { lat: 19.5820, lng: 77.1756 } // Latitude and Longitude
  },
  {
    name: "Triambakeshwar",
    location: "Triambak, Nashik, Maharashtra",
    openingTiming: "6:00 AM - 9:00 PM",
    closingTiming: "N/A",
    importantDates: ["Kumbh Mela", "Maha Shivaratri"],
    prashad: "Rice, Coconut",
    establishment: "Twelfth Jyotirlinga",
    keyInformation: "Triambakeshwar is located near Nashik and is a significant pilgrimage site during Kumbh Mela.",
    image: "/images/triambakeshwar.png", // Image path
    coordinates: { lat: 19.9434, lng: 73.5255 } // Latitude and Longitude
  }
];


// Slick Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TempleSlider = () => {
  return (
    <section className="py-16    ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">12 JYOTIRLINGAS</h1>
        <Slider {...sliderSettings}>
          {temples.map((temple, index) => (
            <TempleCard refId={index} key={index} temple={temple} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TempleSlider;
