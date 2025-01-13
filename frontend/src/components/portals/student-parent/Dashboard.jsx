import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-gray-900" variants={itemVariants}>
        Student/Parent Dashboard
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Pending Requests</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Visit Request #1234</span>
              <span className="text-yellow-500 font-medium">Pending</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Visit Request #5678</span>
              <span className="text-yellow-500 font-medium">Pending</span>
            </li>
          </ul>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Visit Status</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Last Visit</span>
              <span className="text-green-500 font-medium">Completed</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Upcoming Visit</span>
              <span className="text-blue-500 font-medium">Scheduled</span>
            </li>
          </ul>
        </motion.div>
      </div>
      <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-800 font-medium">New visit scheduled</p>
              <p className="text-gray-500 text-sm">2 hours ago</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Visit request approved</p>
              <p className="text-gray-500 text-sm">1 day ago</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-2 mr-4">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Visit reminder</p>
              <p className="text-gray-500 text-sm">Upcoming visit in 2 days</p>
            </div>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;

