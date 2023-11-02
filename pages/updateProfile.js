import React from 'react'
import UpdateProfile from '../Component/UpdateProfile'
// import {getSession} from 'next-auth/react'

const updateProfile = () => {
  return (
    <div>
        <UpdateProfile/>
  
    </div>
  )
}

export default updateProfile;
// export async function getServerSideProps(context) {
//   const session = await getSession(context)
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props:{
//       session
//     }
//   }
// }