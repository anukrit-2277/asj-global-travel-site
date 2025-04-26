
import { CarFront, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 mb-4 leading-tight tracking-tight animate-fade-in">
            ASJ Global <br className="hidden md:block" />
            Tours & Travel
          </h1>
          <p className="text-center text-xl md:text-2xl text-gray-600 font-poppins max-w-2xl mx-auto animate-fade-in delay-200">
            Your Trusted Travel Partner Across India
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl font-poppins text-gray-700 leading-relaxed">
              We offer premium taxi services from Jaipur to destinations across India. With our fleet of comfortable vehicles and experienced drivers, we ensure safe and luxurious travel experiences for all our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-12 text-center">
            Our Fleet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full h-96">
  <a href="#" className="block h-full">
    <div className="bg-gray-200 h-2/3 w-full flex items-center justify-center">
      <img 
        src="src/assets/sedan.png" 
        alt="Car Logo" 
        className="object-contain w-5/6 h-5/6"
      />
    </div>
    <div className="p-6 h-1/3 flex flex-col justify-center">
      <h3 className="text-2xl font-playfair font-semibold mb-2">Luxury Sedan</h3>
      <p className="text-gray-600 text-base">Comfortable and spacious vehicle perfect for your journey.</p>
    </div>
  </a>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full h-96">
  <a href="#" className="block h-full">
    <div className="bg-gray-200 h-2/3 w-full flex items-center justify-center">
      <img 
        src="src\assets\suv.png" 
        alt="Car Logo" 
        className="object-contain w-5/6 h-5/6"
      />
    </div>
    <div className="p-6 h-1/3 flex flex-col justify-center">
      <h3 className="text-2xl font-playfair font-semibold mb-2">Luxury SUV</h3>
      <p className="text-gray-600 text-base">Comfortable and spacious vehicle perfect for your journey.</p>
    </div>
  </a>
</div>


<div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full h-96">
  <a href="#" className="block h-full">
    <div className="bg-gray-200 h-2/3 w-full flex items-center justify-center">
      <img 
        src="src\assets\van_2 .png" 
        alt="Car Logo" 
        className="object-contain w-5/6 h-5/6"
      />
    </div>
    <div className="p-6 h-1/3 flex flex-col justify-center">
      <h3 className="text-2xl font-playfair font-semibold mb-2">Luxury Van</h3>
      <p className="text-gray-600 text-base">Comfortable and spacious vehicle perfect for your journey.</p>
    </div>
  </a>
</div>


</div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    
    {/* Logo */}
    <div className="flex justify-center mb-6">
      <a href="#" className="flex items-center">
        <img src="src\assets\logo_modified.png" alt="Logo" className="h-40 w-30 object-contain" />
      </a>
    </div>

    <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Contact Us</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-center md:justify-start space-x-3">
        <Phone className="w-5 h-5" />
        <span>+91 8949976673</span>
      </div>
      <div className="flex items-center justify-center md:justify-start space-x-3">
        <Mail className="w-5 h-5" />
        <span>asjglobaltours@gmail.com</span>
      </div>
      <div className="flex items-center justify-center md:justify-start space-x-3">
        <MapPin className="w-5 h-5" />
        <span>Jaipur, Rajasthan</span>
      </div>
      <div className="flex items-center justify-center md:justify-start space-x-6">
        <a href="#" className="hover:text-gray-300">Facebook</a>
        <a href="#" className="hover:text-gray-300">Instagram</a>
      </div>
    </div>

    <div className="text-center mt-8 pt-8 border-t border-gray-800">
      <p>&copy; 2025 ASJ Global Tours & Travel. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Index;
