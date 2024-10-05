import React from 'react'

const ElectionCard = ({ candidatesData }) => {
  return (
    <>
    <div className="bg-white">
      <div className="">
        <div className="flex flex-col w-full h-max overflow-y-auto overflow-x-hidden lg:flex-row lg:flex-wrap lg:wrap xl:justify-start lg:justify-center">
          {candidatesData.map((post) => (
            <div key={post.id} className="mt-8 lg:mr-12 flex flex-col sm:flex-row lg:flex-col lg:max-w-80 border border-gray-400 rounded-md shadow-md">
              <img src={post.profile_photo} alt="thumbnail" className="h-full w-full sm:h-44 w-44 lg:w-80 lg:h-80 rounded-sm" />
              <div className="bg-white lg:max-w-96 w-full rounded-md px-2 py-2">
                <h5 className="text-lg text-green-600 hover:underline sm:text-xl">{post.name}</h5>
                <p className="text-gray-500 tracking-wide hidden sm:block sm:mt-1">{post.party}</p>
                <p className="mt-1 sm:mt-2 text-gray-600">Votes: {post.votes} ({post.percentage} %)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default ElectionCard