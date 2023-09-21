import Image from "next/image";
import Layout from "@/Layout";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useRouter } from "next/router";

export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const router = useRouter()

  return (
    <>
      <Layout title="Home">
        <div className="w-9/12 m-auto">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={7000}
            bullets={false}
          >
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car1.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black text-4xl rounded-md px-2 py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-3 py-2 rounded-xl"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car2.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black text-4xl rounded-md px-2 py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-3 py-2 rounded-xl"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car3.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black text-4xl rounded-md px-2 py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-3 py-2 rounded-xl"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car4.jpg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black text-4xl rounded-md px-2 py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-3 py-2 rounded-xl"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
          </AutoplaySlider>
        </div>
      </Layout>
    </>
  )
}