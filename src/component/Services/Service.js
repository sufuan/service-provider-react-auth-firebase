import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description ,picture} = service
  
const navigate =useNavigate()
const navigateTODetails=id=>{
 navigate(`/services/${id}`)
}
    return (
      <div>
         <div className='shadow-lg rounded-2xl bg-white h-54 p-4'>
                <div className=" gap-4 ">
                    <div className="flex-shrink-0 ">
                        <img className=' h-30 mx-auto -full object-cover' src={picture} alt="profile" />
                    </div>
                    <div className="flex flex-col justify-end py-2">
                        <p className=' text-lg'>{name}</p>
                        <p className='text-gray-600 text-sm mt-1 ' >{description}</p>
                        <p className=' '>price :{price}</p>
                        <button onClick={()=>navigateTODetails(id)} className='rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white'>Book now</button>
                    </div>
                </div>


            </div>
      </div>
    );
};

export default Service;