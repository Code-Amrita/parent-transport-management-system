import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { User, Phone, Car, GraduationCap, Calendar, BookOpen } from 'lucide-react';

const GenerateEntryID = () => {
  const [visitorDetails, setVisitorDetails] = useState({
    parentName: '',
    phoneNo: '',
    carPlateNo: '',
    studentName: '',
    studyYear: '',
    department: '',
  });
  const [errors, setErrors] = useState({});
  const [qrCode, setQRCode] = useState('');

  const validatePhoneNo = (phoneNo) => {
    return /^\d{10}$/.test(phoneNo);
  };

  const validateCarPlateNo = (carPlateNo) => {
    // Regex for Indian car plate numbers (e.g., MH12AB1234 or MH12A1234)
    return /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/.test(carPlateNo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVisitorDetails({ ...visitorDetails, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhoneNo(visitorDetails.phoneNo)) {
      newErrors.phoneNo = 'Phone number must be exactly 10 digits';
    }

    if (!validateCarPlateNo(visitorDetails.carPlateNo)) {
      newErrors.carPlateNo = 'Invalid car plate number format';
    }

    if (Object.keys(newErrors).length === 0) {
      const entryID = Math.random().toString(36).substr(2, 9);
      setQRCode(JSON.stringify({ ...visitorDetails, entryID }));
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900">Generate Entry ID</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
              Parent Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={visitorDetails.parentName}
                onChange={handleInputChange}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={visitorDetails.phoneNo}
                onChange={handleInputChange}
                className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                  errors.phoneNo ? 'border-red-500' : ''
                }`}
                placeholder="1234567890"
                required
              />
            </div>
            {errors.phoneNo && <p className="mt-2 text-sm text-red-600">{errors.phoneNo}</p>}
          </div>
          <div>
            <label htmlFor="carPlateNo" className="block text-sm font-medium text-gray-700">
              Car Plate Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Car className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="carPlateNo"
                name="carPlateNo"
                value={visitorDetails.carPlateNo}
                onChange={handleInputChange}
                className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                  errors.carPlateNo ? 'border-red-500' : ''
                }`}
                placeholder="MH12AB1234"
                required
              />
            </div>
            {errors.carPlateNo && <p className="mt-2 text-sm text-red-600">{errors.carPlateNo}</p>}
          </div>
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <GraduationCap className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={visitorDetails.studentName}
                onChange={handleInputChange}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Jane Doe"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BookOpen className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="department"
                name="department"
                value={visitorDetails.department}
                onChange={handleInputChange}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Computer Science"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="studyYear" className="block text-sm font-medium text-gray-700">
              Year of Study
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="studyYear"
                name="studyYear"
                value={visitorDetails.studyYear}
                onChange={handleInputChange}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                required
              >
                <option value="">Select year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Generate QR Code
          </button>
        </form>
      </div>
      {qrCode && (
        <motion.div
          className="mt-6 flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Entry QR Code</h2>
          <QRCodeSVG value={qrCode} size={200} />
          <p className="mt-4 text-sm text-gray-600 text-center">Scan this QR code at the entrance for quick access.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GenerateEntryID;

