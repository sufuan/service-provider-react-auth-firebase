import React from 'react';

const Blog = () => {
    return (
        <div className='container p-6'>
            <h1 className='text-2xl py-4'>Difference between authorization and authentication</h1>
            <p className='text-base'>Authentication process এ সিস্টেম এ ঢুকার আগে ব্যবহারকারীর আইডেনটিটি চেক করা হয়, authorization process এ ব্যাবহারকারীর সিস্টেম এ এক্সেস চেক করা হয়

                authentication এ চেক করা হয় ওই ব্যাক্তি ভ্যালিড ব্যাবহারকারী কিনা। আপরদিকে authorization এ চেক করে ভ্যালিড ব্যাবহারকারীর সিস্টেমে কতটুক ব্যাবহার করতে পারবে
                authorization process এর আগে authentication চেক করা হয়। অন্যদিকে authentication এর পর ব্যাবহারকারী authorization এর এক্সেস পায়</p>

                <h1 className='text-2xl p-4'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p > ফায়ারবেস গুগলের একটি সার্ভিস। এটি ব্যাকএন্ড ডেভেলপমেন্ট সফটওয়্যার যা দ্রুত এপ্লিকেশন তৈরিতে সাহায্য করে । বিভিন্ন ধরনের সার্ভিস দেয় যেমন analytics, authentication, databases, configuration, file storage, push messaging যা ব্যাবহার করা খুব সহজ। কোড এপ্লিকেশন তৈরিতে ডেভেলপারদের প্রচুর বেগ পেতে হয় আবার ম্যানেজমেন্ট করাও খুব কঠিন। কিন্তু ফায়ারবেস ব্যাবহার করে এই কাজ গুলো খুব সহজেই করা যায়</p>
        </div>
    );
};

export default Blog;