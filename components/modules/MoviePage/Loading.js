import React from 'react';

// Spinner
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='w-full min-h-screen flex justify-center pt-52'>
            <HashLoader color='#00B9AE' size={100} />
        </div>
    );
};

export default Loading;