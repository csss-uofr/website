import React from 'react'

const ServiceSection = ({ services }) => {
  return (
    <>
      <div className="bg-white border-t bordery-gray-400 py-12 sm:py-16">
        <div className="mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Services
            </h2>
          </div>
          <div className="flex flex-col w-full h-max overflow-y-auto overflow-x-hidden lg:flex-row lg:flex-wrap lg:wrap lg:justify-center">
            {services.map((post) => (
              <div className="mt-8 lg:mr-12 flex flex-col sm:flex-row lg:flex-col lg:max-w-96 border border-gray-400 rounded-md shadow-md">
                <img src={post.image} alt="thumbnail" className="h-full w-full sm:h-44 w-44 lg:w-96 lg:h-96 rounded-sm" />
                <div className="bg-white lg:max-w-96 w-full rounded-md px-2 py-2">
                  <h5 className="text-lg text-green-600 hover:underline sm:text-xl">{post.name}</h5>
                  <p className="text-gray-500 tracking-wide">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSection