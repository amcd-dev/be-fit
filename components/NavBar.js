//NOT CURRENTLY USED

// import Link from "next/link";
// import {useAuth} from "../context/AuthContext";
// import { useRouter } from 'next/router'
//
// export default function NavBar() {
//     const { user, logOut } = useAuth()
//     const router = useRouter()
//
//     return (
//         <div>
//             {
//                 user ? ( //Below displays if user is signed in
//                     <div>
//                         <Link href='/'>Home [] </Link>
//                         <Link href='/dashboard/home'>Dashboard [] </Link>
//                         <button onClick={() => {
//                             logOut()
//                             router.push('/authentication/login')
//                         }}>Log Out</button>
//                     </div>
//                 ) : ( //Below displays if user is not signed in
//                     <div>
//                         <Link href='/'>Home [] </Link>
//                         <Link href='/authentication/register'>Register [] </Link>
//                         <Link href='/authentication/login'>Sign In [] </Link>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }