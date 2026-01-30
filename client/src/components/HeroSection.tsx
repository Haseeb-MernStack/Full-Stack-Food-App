import { Search } from "lucide-react";
import { useState } from "react"
import { Button } from "./ui/button";
import HeroImage from "@/assets/1.webp";

const HeroSection = () => {

    const [searchText, setSearchText] = useState<string>("");

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
            <div className="flex flex-col gap-10 md:w-[40%]">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">Order Food anytime & anywhere</h1>
                    <p className="text-gray-500">Hey! Our Delivery food is waiting for you, we are always near to you.</p>
                </div>
                <div className="relative flex items-center gap-2">

                    <input
                        type="text"
                        placeholder="Search restaurant by name, city & country"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="pl-10 shadow-lg w-full py-2 focus:outline-none focus:ring-2 rounded-md placeholder:text-md text-md"
                    />
                    <Search className="absolute text-gray-500 inset-y-2 left-2" />

                    <Button className="btn-primary btn-primary-hover font-medium">Search</Button>

                </div>
            </div>
            <div>
                <img
                    src={HeroImage}
                    alt="pizza image"
                    className="object-cover w-full max-h-125"
                />
            </div>
        </div>
    )
}

export default HeroSection