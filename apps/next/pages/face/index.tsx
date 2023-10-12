import Head from 'next/head'
import { Face } from 'app/features/screens/face/face'

export default function Page() {
  return (
    <>
      <Head>
        <title>Glow - Face</title>
      </Head>
      <Face />
    </>
  )
}
