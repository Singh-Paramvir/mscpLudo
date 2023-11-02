import React from 'react'
import Fa1 from '../Component/Fa1'
// import {getSession} from 'next-auth/react'

const fa1 = () => {
  return (
    <div>
      
        <Fa1/>
    </div>
  )
}

export default fa1

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