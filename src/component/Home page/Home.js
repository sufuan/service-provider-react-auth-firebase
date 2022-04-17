import React from 'react';
import dentist from '../../assets/dentist.png'

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            {/* hero section  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img src={dentist} alt="heroImg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            we offer dental health services for all ages
                        </h1>
                        <p className="mb-8 leading-relaxed">Our main dental services include family dentistry , dental implants, teeth whitening and different treatment.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make a appointment</button>

                        </div>
                    </div>
                </div>
            </section>

            {/* hero section end 
            service section start */}


            <Services></Services>


            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="https://onecms-res.cloudinary.com/image/upload/s--20_TQECm--/f_auto%2Cq_auto/v1/tdy-migration/190311_doctor_reuters_0_0.jpg?itok=aCRORdpR"/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p className='text-gray-600 text-xl'>More than ever, a beautiful smile opens doors</p>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your guide to a healthy and beautiful smile
                          
                        </h1>
                        <p class="mb-8 leading-relaxed">We offer custom care for every patient. We equip our patients with the knowledge and tools they need to create healthy habits and prevent decay and other complications.</p>
                       
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;