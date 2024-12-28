import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  { id: 1, name: "John Doe", text: "Found my dream home in just a week!", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "Jane Smith", text: "The best real estate service I've ever used.", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "Mike Johnson", text: "Smooth process from start to finish.", avatar: "https://i.pravatar.cc/100?img=3" },
];

const useCases = [
  { id: 1, title: "Find Your Dream Home", description: "Browse thousands of listings", icon: "🏠" },
  { id: 2, title: "Sell Your Property", description: "List your property with ease", icon: "💰" },
  { id: 3, title: "Rent a Place", description: "Discover rental opportunities", icon: "🔑" },
];

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);

  useEffect(() => {
    const fetchFeaturedListings = async () => {
      try {
        const res = await fetch('/api/listing/get?featured=true&limit=3');
        const data = await res.json();
        setFeaturedListings(data);
      } catch (error) {
        console.error('Error fetching featured listings:', error);
      }
    };
    fetchFeaturedListings();
  }, []);

  return (
    <div className="min-h-screen font-sans relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Find Your Perfect Home</h1>
          <p className="text-xl mb-8 text-gray-600">Discover a place you'll love to live</p>
          <Link to="/search" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Start Your Search
          </Link>
        </section>

        {/* Use Cases */}
        <section className="bg-white bg-opacity-80 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase) => (
                <div key={useCase.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white bg-opacity-80 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <span className="font-semibold text-gray-800">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">RealEstate</h3>
                <p className="text-gray-400">Finding you the perfect place to call home.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/search" className="text-gray-400 hover:text-white">Search Properties</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; 2023 RealEstate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

