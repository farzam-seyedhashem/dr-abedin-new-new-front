import MainLayout from "@/layouts/Main";
import Image from 'next/legacy/image'

export default function Home(props) {
  const {...other} = props

  return (
    <MainLayout {...other}>
      <div>
        {/*<Image src={"/dr-abedin.jpg"}/>*/}
      </div>
    </MainLayout>
  )
}
