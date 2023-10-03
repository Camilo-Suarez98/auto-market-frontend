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

  return (
    <Layout title='Car details'>
      <div className="w-full m-auto md:w-1/2">
        <AwesomeSlider bullets={false}>
          {imageByQuery.map(image => {
            return (
              <Image
                key={image._id}
                src={image.url}
                width={700}
                height={700}
                alt='car'
              />
            )
          })}
        </AwesomeSlider>
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