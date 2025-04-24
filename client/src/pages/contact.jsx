import React from 'react';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';

const Contact = () => {
  return (
    <PageLayout>
      <div className="flex-1">
        <Header />
        <div className="p-6 mt-16">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">CONTACTS</h1>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">Contact Details</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Contact Name</label>
                  <input
                    className="w-full p-3 border rounded"
                    type="text"
                    placeholder="Enter contact name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Contact Email</label>
                  <input
                    className="w-full p-3 border rounded"
                    type="email"
                    placeholder="Enter contact email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Contact Phone</label>
                  <input
                    className="w-full p-3 border rounded"
                    type="tel"
                    placeholder="Enter contact phone"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Contact Address</label>
                  <input
                    className="w-full p-3 border rounded"
                    type="text"
                    placeholder="Enter contact address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Save Contact
                </button>
              </form>
            </div>

            <div className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-6">Our Location</h2>
                <div className="h-96">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531664!3d-37.81627974202105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2d2d2d2d2d2!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
