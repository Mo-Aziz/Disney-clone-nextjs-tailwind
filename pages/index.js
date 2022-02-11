import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Header from '../components/Header'
import Hero from "../components/Hero"

export default function Home({session}) {
  // const { data: session } = useSession()
  return (
    <div className=" ">
      <Head>
        <title>Disney+ clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header />
      {!session ? <Hero/> :<main>App</main>}
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
