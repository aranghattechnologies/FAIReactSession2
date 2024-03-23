import Link from "next/link";

export default function ContactUsLayout(
    {children}:{children: React.ReactNode}) {

        return(
            <>
            <ul>
                <li>
                    <Link href="/contactus/career">Career</Link>
                    
                </li>
                <li>
                    <Link href="/contactus/business">Business Enquiry</Link>
                </li>
            </ul>
            {children}
        </>
        )
}