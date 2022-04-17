import React from 'react';

const Service = ({ service }) => {
    const {  name, price, description ,picture} = service
    console.log(service);
    return (
      <div>
         <div className='shadow-lg rounded-2xl bg-white h-54 p-4'>
                <div className=" gap-4 ">
                    <div className="flex-shrink-0 ">
                        <img className=' h-30 mx-auto -full object-cover' src={picture} alt="profile" />
                    </div>
                    <div className="flex flex-col justify-end py-2">
                        <p className=' text-base'>{name}</p>
                        <p className='text-gray-600 text-sm mt-1 ' >{description}/5</p>
                        <p className=' '>price :{price}</p>
                        <button className='rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white'>Book now</button>
                    </div>
                </div>


            </div>
      </div>
    );
};

export default Service;