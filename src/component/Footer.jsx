import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-10">
        <aside>
          <img 
            src="https://i.ibb.co/wND1hNXg/900d367b560223347a7cc94618a1e92e.jpg" 
            alt="PetCare Logo" 
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />
          <p className="mt-2 text-white font-semibold text-lg">
            PetCare
          </p>
          <p className="text-sm">
            Caring for your pets with love ❤️  
            Trusted service since 2024.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-white">Pet Grooming</a>
          <a className="link link-hover text-white">Veterinary Care</a>
          <a className="link link-hover text-white">Pet Training</a>
          <a className="link link-hover text-white">Pet Boarding</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover text-white">Home</a>
          <a className="link link-hover text-white">About Us</a>
          <a className="link link-hover text-white">Our Services</a>
          <a className="link link-hover text-white">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Contact</h6>
          <p className="text-white">📞 +880 1234-567890</p>
          <p className="text-white">📧 support@petcare.com</p>
          <p className="text-white">📍 Dhaka, Bangladesh</p>
        </nav>
      </footer>

      <div className="text-center p-4 bg-purple-700 text-white">
        © 2024 PetCare — All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer

