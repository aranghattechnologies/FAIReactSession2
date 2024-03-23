import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
   return(
        <div>
            <h1>Home</h1>
            <p>Welcome to my website</p>
            <Image src="/images/nextjs.png" width={200} height={200} alt="Next.js Logo" />
        </div>
   )
}
