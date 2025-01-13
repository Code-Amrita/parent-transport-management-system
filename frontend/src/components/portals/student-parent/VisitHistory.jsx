import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const VisitHistory = () => {
  const visits = [
    { id: 1, date: '2023-05-15', purpose: 'Parent Meeting', status: 'Completed' },
    { id: 2, date: '2023-05-10', purpose: 'Document Submission', status: 'Completed' },
    { id: 3, date: '2023-05-05', purpose: 'Campus Tour', status: 'Cancelled' },
    { id: 4, date: '2023-05-01', purpose: 'Admission Inquiry', status: 'Completed' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-gray-900">Visit History</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {visits.map((visit) => (
            <motion.li
              key={visit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-600">{visit.purpose}</p>
                    <p className="flex items-center text-sm text-gray-500">
                      <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {visit.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  {visit.status === 'Completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    visit.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {visit.status}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default VisitHistory;

