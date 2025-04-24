import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';

function PropertyDetail() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Header />
                <div className="p-6 mt-16">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">PROPERTY DETAIL</h1>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add New Property</button>
                    </div>
                    <Card className="mt-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <img src="https://storage.googleapis.com/a1aa/image/KybXiCgD4diI9Oy5G-j0V7P0zBUyvVpxPeVcFHtgmxo.jpg" 
                                     alt="Property Image" 
                                     className="rounded mb-4" 
                                     width="600" 
                                     height="400" />
                                <div className="grid grid-cols-3 gap-4">
                                    <img src="https://storage.googleapis.com/a1aa/image/lrWOLlWksmn6vJZ9ZxiGj77XNFjAkqMMLGTnjWwIEnQ.jpg" 
                                         alt="Property Image 1" 
                                         className="rounded" 
                                         width="200" 
                                         height="150" />
                                    <img src="https://storage.googleapis.com/a1aa/image/v_T9LlD2Ai68g_ruyxBiB1vbpuE_NKwWVaO_kbkplps.jpg" 
                                         alt="Property Image 2" 
                                         className="rounded" 
                                         width="200" 
                                         height="150" />
                                    <img src="https://storage.googleapis.com/a1aa/image/PZ_oDwRpedonWPp0xUHUAmDr63ujURKL3St0QZxgRZE.jpg" 
                                         alt="Property Image 3" 
                                         className="rounded" 
                                         width="200" 
                                         height="150" />
                                </div>
                            </div>
                            <div className="w-1/2 pl-6">
                                <h2 className="text-xl font-bold text-gray-700 mb-4">Oceanview Retreat</h2>
                                <p className="text-gray-600 mb-4">
                                    Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a truly unparalleled coastal living experience. With breathtaking panoramic views of the ocean and direct access to a private white sandy beach, Oceanview Retreat is a haven for relaxation and rejuvenation. Immerse yourself in the soothing sounds of the waves and indulge in the serenity of the surroundings.
                                </p>
                                <h3 className="text-lg font-bold text-gray-700 mb-2">Property Information</h3>
                                <p className="text-gray-600 mb-2"><span className="font-bold">Bedrooms :</span> 4</p>
                                <p className="text-gray-600 mb-2"><span className="font-bold">Bathrooms :</span> 4</p>
                                <p className="text-gray-600 mb-2"><span className="font-bold">Total Expense :</span> ₹20000000</p>
                                <p className="text-gray-600"><span className="font-bold">Property Address :</span> 123 Oceanview Drive, Miami, FL 12345</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetail;
