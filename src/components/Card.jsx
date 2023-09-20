import Link from 'next/link'
import Image from 'next/image'

const Card = () => {
  return (
    <Link href='/'>
      <div className='car-section bg-gray-700 p-3 rounded-xl'>
        <div className='image-section'>
          <Image
            className='rounded-md'
            src="/logo-company.png"
            width={250}
            height={250}
            alt="Company's logo"
          />
        </div>
        <div className="info-section">
          <h2>$ Price</h2>
          <h3>Brand with model</h3>
          <p>year</p>  {/* Including kms, year and location */}
          <p>kms</p>  {/* Including kms, year and location */}
          <p>location</p>  {/* Including kms, year and location */}
        </div>
      </div>
    </Link>
  )
}

export default Card
