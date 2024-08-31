import React from 'react';
import { Puff } from 'react-loader-spinner';

const LoadingScreen = () => {
  return (
    <div className='container w-full min-h-[calc(100vh-23vh)] flex flex-col items-center justify-center'>
 <Puff
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  {/* <p className='mt-2 text-xl font-bold tracking-wide'>Loading</p> */}

    </div>

  )
}

export default LoadingScreen 