import '../styles/globals.css'
import Layout from "./layout";
import {AuthContextProvider} from "../context/AuthContext";
import {useRouter} from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

//routes which can be accessed by non-authenticated users
const noAuthRequired = ['/', '/authentication/register', '/authentication/login']

function MyApp({Component, pageProps}) {
  const router = useRouter()
  return (
      <AuthContextProvider>
        <Layout>
          {noAuthRequired.includes(router.pathname) ? (
              <Component {...pageProps} />
          ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
          )}
        </Layout>
      </AuthContextProvider>
  )
}

export default MyApp
