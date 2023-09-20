import Layout from "@/Layout";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Card />
      </Layout>
    </>
  )
}

// import { useRouter } from "next/router";
// const router = useRouter()
{/* <Button
  onClick={() => router.push('/test')}
/> */}
//  to route in a diferent page