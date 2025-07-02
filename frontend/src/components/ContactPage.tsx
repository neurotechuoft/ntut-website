// ContactPage.tsx
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || formData.name.trim().length < 2) {
      setStatus('Please enter a valid name (at least 2 characters).');
      return;
    }
    if (!formData.email || !formData.email.includes('@')) {
      setStatus('Please enter a valid email address.');
      return;
    }
    if (!formData.message || formData.message.trim().length < 5) {
      setStatus('Message should be at least 5 characters long.');
      return;
    }

    setStatus('Submitting...');

    try {
      console.log('Submitting Data:', JSON.stringify(formData));

      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response Status:', response.status);

      const data = await response.json();

      console.log('Response Data:', data);

      if (response.ok) {
        setStatus(`Your message has been submitted successfully! You wrote: "${formData.message}"`);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Submission Error:', data);
        setStatus(`Error: ${data.message || 'Please try again later.'}`);
      }
    } catch (error) {
      console.error('Network/Fetch Error:', error);
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="text-[#562c81] bg-[#e7e7e7] min-h-screen font-roboto">
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            Contact Us
          </h2>
          <div className="mb-12">
            <h3 className="text-3xl font-garamond font-bold mb-6 text-[#562c81]">For Specific Inquiries, Contact Us At:</h3>
            <ul className="text-xl md:text-2xl space-y-4 text-[#562c81] tracking-wide">
              <li><strong className="text-[#562c81]">General Inquiries:</strong> <a href="mailto:info@neurotechuoft.com" className="text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200">info@neurotechuoft.com</a></li>
              <li><strong className="text-[#562c81]">Partnerships:</strong> <a href="mailto:partnerships@neurotechuoft.com" className="text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200">partnerships@neurotechuoft.com</a></li>
              <li><strong className="text-[#562c81]">Events:</strong> <a href="mailto:events@neurotechuoft.com" className="text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200">events@neurotechuoft.com</a></li>
              <li><strong className="text-[#562c81]">Media and Press:</strong> <a href="mailto:media@neurotechuoft.com" className="text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200">media@neurotechuoft.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-garamond font-bold mb-6 text-[#562c81]">General Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div>
                <label htmlFor="name" className="block text-xl font-medium mb-2 text-[#562c81]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white border border-[#562c81]/20 rounded-xl text-[#562c81] placeholder-gray-400 focus:border-[#562c81]/50 focus:ring-1 focus:ring-[#562c81]/50 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl font-medium mb-2 text-[#562c81]">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white border border-[#562c81]/20 rounded-xl text-[#562c81] placeholder-gray-400 focus:border-[#562c81]/50 focus:ring-1 focus:ring-[#562c81]/50 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl font-medium mb-2 text-[#562c81]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 bg-white border border-[#562c81]/20 rounded-xl text-[#562c81] placeholder-gray-400 focus:border-[#562c81]/50 focus:ring-1 focus:ring-[#562c81]/50 transition-colors duration-200"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#373683] to-[#5b2c81] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#562c81]/20 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {status && (
            <div className="mt-8 p-4 rounded-xl text-center text-[#562c81] bg-white/80 backdrop-blur-sm border border-[#562c81]/20">
              {status}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
