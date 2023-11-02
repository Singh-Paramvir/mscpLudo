import React from 'react'
import Fa from '../Component/Fa'
// import {getSession} from 'next-auth/react'

const fa = () => {
  return (
    <div>
      
        <Fa/>
    </div>
  )
}

export default fa

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