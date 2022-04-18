import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center space-x-2">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
        </div>
        <div class="
          spinner-border
          animate-spin
          inline-block
          w-8
          h-8
          border-4
          rounded-full
          text-purple-500
        " role="status">
        </div>
        <div class="
          spinner-border
          animate-spin
          inline-block
          w-8
          h-8
          border-4
          rounded-full
          text-green-500
        " role="status">
        </div>
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-500" role="status">
        
        </div>
        <div class="
          spinner-border
          animate-spin
          inline-block
          w-8
          h-8
          border-4
          rounded-full
          text-yellow-500
        " role="status">
        </div>
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-300" role="status">
        </div>
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-300" role="status">
        </div>
      </div>
    );
};

export default Loading;