import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter()
  router.push('/dashboard/home')
  return <h1 className="text-4xl font-bold underline">Loading</h1>
}