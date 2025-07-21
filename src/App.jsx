import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [liters, setLiters] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address && liters) {
      console.log('Water request submitted:', { name, address, liters });
      setSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          🚰 Water Supply Request
        </h1>

        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Request Submitted!
            </h2>
            <p className="text-gray-700">
              Thank you, <span className="font-semibold">{name}</span>. We will deliver 
              <span className="font-semibold"> {liters} liters</span> of water to:
            </p>
            <p className="mt-2 italic text-gray-600">{address}</p>

            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setSubmitted(false)}
            >
              Request Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Delivery Address
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter full delivery address"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Liters Required
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={liters}
                onChange={(e) => setLiters(e.target.value)}
                placeholder="e.g. 500"
                min="1"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
