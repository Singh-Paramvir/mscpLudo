import React from 'react';
import Verify from '../Component/Verify';
import {getSession} from 'next-auth/react';


const verify = () => {
  return (
    <div>
        < Verify/>
  
    </div>
  )
}

export default verify;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}