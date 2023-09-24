import { useState } from 'react'
import Layout from '@/Layout'
import Card from '@/components/Card'
import { BiFilterAlt } from 'react-icons/bi'

const CarsPage = () => {
  const [showFilters, setShowFilters] = useState(true)

  const handleShowFilters = () => {
    if (showFilters) {
      setShowFilters(!showFilters)
    } else {
      setShowFilters(!showFilters)
    }
  }

  return (
    <Layout title='Cars'>
      <div className='w-5/6 m-auto flex flex-col justify-center sm:flex-row sm:justify-start'>
        <button
          className='flex justify-center items-center w-3/4 m-auto outline-none bg-blue-700 my-4 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:hidden sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6'
          onClick={handleShowFilters}
        >
          Filter <BiFilterAlt />
        </button>

        <div className='w-1/4 hidden flex-col sm:flex'>
          <p className='text-center'>
            Filter by:
          </p>
          <div>
            <form className='w-9/12 m-auto flex flex-col'>
              <label htmlFor='brand'>Brand</label>
              <select id='brand' name='brand' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value="chevrolet">Chevrolet</option>
              </select>

              <label htmlFor='model'>Model</label>
              <select id='model' name='model' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>

              <label htmlFor='year'>Year</label>
              <select id='year' name='year' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>

              <label htmlFor='km'>Km</label>
              <select id='km' name='km' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>

              <label htmlFor='location'>Location</label>
              <select id='location' name='location' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>

              <label htmlFor='fuel'>Fuel</label>
              <select id='fuel' name='fuel' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>

              <label htmlFor='color'>Color</label>
              <select id='color' name='color' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>

              <label htmlFor='price'>Price</label>
              <select id='price' name='price' className='text-black rounded-md px-2 py-1 mb-2'>
                <option value="Choose an option">-- --</option>
                <option value=""></option>
              </select>
              <button
                className='bg-blue-700 mt-2 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6'
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* mobile view */}
        {!showFilters &&
          <div className='w-full flex flex-col justify-center items-center mb-12 sm:hidden'>
            <div className='w-full'>
              <form className='w-9/12 m-auto flex flex-col'>
                <label htmlFor='brand'>Brand</label>
                <select id='brand' name='brand' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value="chevrolet">Chevrolet</option>
                </select>

                <label htmlFor='model'>Model</label>
                <select id='model' name='model' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>

                <label htmlFor='year'>Year</label>
                <select id='year' name='year' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>

                <label htmlFor='km'>Km</label>
                <select id='km' name='km' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>

                <label htmlFor='location'>Location</label>
                <select id='location' name='location' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>

                <label htmlFor='fuel'>Fuel</label>
                <select id='fuel' name='fuel' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>

                <label htmlFor='color'>Color</label>
                <select id='color' name='color' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>

                <label htmlFor='price'>Price</label>
                <select id='price' name='price' className='text-black rounded-md px-2 py-1 mb-2'>
                  <option value="Choose an option">-- --</option>
                  <option value=""></option>
                </select>
                <button
                  className='bg-blue-700 mt-2 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6'
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        }
        <div className='w-full flex justify-center flex-wrap gap-6 sm:w-3/4'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  )
}

export default CarsPage