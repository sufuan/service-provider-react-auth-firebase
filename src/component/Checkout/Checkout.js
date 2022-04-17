import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const {ServiceId}=useParams()
    console.log(ServiceId);
    return (
        <div>
                this is Checkout
        </div>
    );
};

export default Checkout;