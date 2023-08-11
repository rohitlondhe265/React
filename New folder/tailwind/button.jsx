import React from 'react'

export default function button() {
  return (
    <div>
      {/* <!-- Using utilities: --> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>

      {/* <!-- Extracting component classNamees: -->
            <button className="btn btn-blue">
                Button
            </button>

            <style>
                .btn {
                    @apply font-bold py-2 px-4 rounded;
  }
                .btn-blue {
                    @apply bg-blue-500 text-white;
  }
                .btn-blue:hover {
                    @apply bg-blue-700;
  }
            </style> */}

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
      </button>

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
        Button
      </button>

      <div className="inline-flex">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>

      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Download</span>
      </button>
    </div>
  )
}
