


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Checkout = () => {
    const {ServiceId}=useParams()
      console.log(ServiceId);

    const [showMsg, setShowMsg] = useState('')
   

    const handleSubmit = e => {
        e.preventDefault()
        setShowMsg('thank you for booking')
       
    }

    return (
        <div>
           <p className='font-semibold p-5 text-center'> you have chosen service no {ServiceId}</p>
            {<p className='text-4xl text-center text-green-600 py-10'>{showMsg}</p>}
            <section
                aria-labelledby="payment-and-shipping-heading"
                className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
            >


                <form onSubmit={handleSubmit}>
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                        <div>
                            <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                                Contact information
                            </h3>

                            <div className="mt-6">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-lg font-medium text-gray-900">Payment details</h3>

                            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                                <div className="col-span-3 sm:col-span-4">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                        Card number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            required
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                                        />
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                        Expiration date (MM/YY)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                          required
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                        CVC
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            required
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                            <button disableBtn 
                                type="submit"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Checkout;