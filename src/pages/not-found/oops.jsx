import { Link } from 'react'
import Home from "../home/Home";

export default function NotFound() {
    return (
        <div className='404'>
        <h1>Oops - it seems like you are lost...please try your request again.</h1>
        {/* <Link path="../" element={<Home />}>Let's get you back home safely!</Link> */}
        </div>
    )
}