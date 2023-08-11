import React from 'react'
import { useState } from 'react'

export default function App() {
  const [difficulty, setDifficulty] = useState()
  return (
    <div classNameName='w-64 mx-auto'>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} classNameName="select select-primary w-full">
        <option hidden>Select the Difficulty</option>
        <option key="Easy" value="easy">Easy</option>
        <option key="Medium" value="medium">Medium</option>
        <option key="Hard" value="hard">Hard</option>
      </select>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      <label htmlFor="large" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Large select</label>
      <select id="large" className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Small select</label>
      <select id="small" className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  )
}
