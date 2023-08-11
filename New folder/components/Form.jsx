import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    subscribe: false,
    country: '',
    avatar: null,
    birthDate: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data (e.g., send it to a server)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Gender</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Subscribe to Newsletter
          </label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block font-medium mb-2">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="avatar" className="block font-medium mb-2">
            Avatar
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor="avatar"
            className="block bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          >
            Choose Avatar
          </label>
          {formData.avatar && (
            <p className="text-xs mt-1">{formData.avatar.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="birthDate" className="block font-medium mb-2">
            Birth Date
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-2">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
