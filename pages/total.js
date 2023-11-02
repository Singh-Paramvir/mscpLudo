import React from 'react'
import Fa from '../Component/Fa'
import Login7 from '../Component/total'
// import {getSession} from 'next-auth/react'

const total1 = () => {
  return (
    <div>
      
        <Login7/>
    </div>
  )
}

export default total1

// export async function getServerSideProps(context) {
//     const session = await getSession(context)
//     if (session) {
//       return {
//         redirect: {
//           destination: "/dashboard",
//           permanent: false,
//         }
//       }
//     }
//     return {
//       props:{
//         session
//       }
//     }
//   }