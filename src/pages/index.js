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
        <div className="w-full m-auto md:w-9/12">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={5000}
            bullets={false}
            buttons={false}
          >
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car1.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black rounded-md text-base text-center min-[320px]:text-xl sm:text-4xl sm:px-2 sm:py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car2.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black rounded-md text-base text-center min-[320px]:text-xl sm:text-4xl sm:px-2 sm:py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car3.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black rounded-md text-base text-center min-[320px]:text-xl sm:text-4xl sm:px-2 sm:py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6"
                onClick={() => router.push('/cars')}
              >
                Go to Marketplace
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("/car4.jpg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
            >
              <h3 className="font-bold bg-black rounded-md text-base text-center min-[320px]:text-xl sm:text-4xl sm:px-2 sm:py-1">The car of your dreams is here</h3>
              <button
                className="bg-blue-700 mt-2 px-0.5 py-px min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 rounded-xl md:text-2xl md:mt-6"
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