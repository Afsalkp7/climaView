import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";

function WeaterBox() {
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState("00");
    const [place,setPlace] = useState("");
    const [weather,setWeather] = useState("")

    useEffect(() => {
        // Fetch data from an API
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:4000/");
                const res = await response.json();
                setData([res]); // Updated to use array literal
                if (res && res.current) {
                    setTemp(Math.floor(res.current.temp / 10));
                    setPlace(res.timezone)
                    setWeather(res.current.weather[0].main)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex text-center items-center justify-center min-h-screen">
            <div className="bg-orange-200 p-4 w-11/12 md:w-2/3 lg:w-2/5 h-auto text-red-500 rounded-lg">
                <div className="relative mb-4">
                    <select className="bg-transparent text-center text-red-500 text-base md:text-lg lg:text-xl font-bold border-none rounded p-2">
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>Yesterday</option>
                    </select>
                </div>

                <div className="flex mb-4 text-center items-center justify-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl mx-4">
                        <FiSun />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        {temp}°C
                    </h1>
                </div>

                <div className="text-lg md:text-xl lg:text-2xl mb-2 font-bold">
                    {weather}
                </div>

                <div className="text-sm md:text-base mb-2">
                    {place}
                </div>

                <div className="text-base md:text-lg lg:text-xl">
                    July 19, 2024
                </div>
            </div>
        </div>
    );
}

export default WeaterBox;
