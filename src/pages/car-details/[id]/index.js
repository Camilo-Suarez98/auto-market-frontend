import React from 'react'
import Image from 'next/image'
import Layout from '@/Layout';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CarDetailsPage = ({ car, image }) => {
  const info = car
  const infoImage = image
  const imageByCar = info.carImages.map(image => image);
  const imageByQuery = infoImage.filter(image => imageByCar.includes(image._id));
  console.log(info);

  return (
    <Layout title='Car details'>
      <div className="flex flex-col items-center w-5/6 m-auto md:flex-row">
        <div className='md:w-1/2'>
          <AwesomeSlider bullets={false}>
            {imageByQuery.map(image => {
              return (
                <div
                  key={image._id}
                  data-src={image.url}
                />
              )
            })}
          </AwesomeSlider>
        </div>
        <div className='text-center my-8 md:w-1/2'>
          <h3 className='text-4xl'>$ {info.price}</h3>
          <h3 className='text-3xl'>{info.brand} {info.model}</h3>
          <p className='text-3xl'>Year: {info.year}</p>
          <p className='text-3xl'>Engine: {info.engineDisplacement == null ? 'No data provided' : info.engineDisplacement}</p>
          <p className='text-3xl'>{info.km} kms</p>
          <p className='text-3xl'>Type of fuel: {info.fuel}</p>
          <p className='text-3xl'>Color: {info.color}</p>
          <p className='text-2xl'>{car.location}</p>
        </div>
      </div>
    </Layout>
  )
}

export default CarDetailsPage

export const getServerSideProps = async ({ query }) => {
  const carId = query.id
  const carResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars/${carId}`)
  const carInfo = await carResponse.json()

  const imagesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car-images/`)
  const imageInfo = await imagesResponse.json()

  const [carData, imageData] = await Promise.all([carInfo, imageInfo])

  return {
    props: {
      car: carData.data,
      image: imageData.data
    },
  };
}