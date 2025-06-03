import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e2eeebb1-08ee-4ab6-9094-0ed21e0efa3a',
          ...formData
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1630] rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-kyan-800">Contact Us</h3>
          <button 
            onClick={onClose}
            className="text-kyan-500 hover:text-kyan-700 hover:cursor-pointer"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-kyan-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" block py-2 px-2  border mt-2  w-full rounded-md border-kyan-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-kyan-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className=" py-2 px-2 block w-full border mt-2 rounded-md border-kyan-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-kyan-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full border mt-2 rounded-md px-2 py-1 border-kyan-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            ></textarea>
          </div>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
} 