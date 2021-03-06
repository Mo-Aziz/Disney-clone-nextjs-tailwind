import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Brands from '../components/Brands';
import Header from '../components/Header'
import Hero from "../components/Hero"
import Slider from '../components/Slider';

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className=" ">
      <Head>
        <title>Disney+ clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header />
      {/* {!session ? <Hero/> :(<main>App</main>)} */}
      <Slider/>
      <Brands/>
    </div>
  )
}

export async function getServerSideprops(context){
  const session= await getSession( context);

  return{
    props:{
      session,
    }
  }
}
