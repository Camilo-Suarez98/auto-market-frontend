import Link from 'next/link'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="bg-gray-700 p-3 rounded-xl">
      <Link href='/'>
        <div className=''>
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
            <h2 className='text-2xl'>$ Price</h2>
            <h3 className='text-xl'>Brand with model</h3>
            <div className="flex">
              <p className='w-1/2'>year</p>
              <p className='w-1/2'>kms</p>
            </div>
            <p>location</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
