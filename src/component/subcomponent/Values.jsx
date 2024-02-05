import React from "react";

const Values = () => {
    return (
        <div
            className=" w-full lg:w-[80%] h-[90%] lg:h-[70%] grid grid-cols-1   gap-5 lg:gap-10 place-items-center       py-5  lg:px-16">
            <div className="  w-[ 300px] lg:w-[400px] h-auto bg-slate-50 rounded-xl shadow-xl px-5 py-8 leading-8 lg:h-[350px]"
                 data-aos='fade-zoom-in' data-aos-delay='5000'>
                <h1 className=" w-[20%] font-serif font-bold border-b-2 border-black py-2 mb-10 text-2xl uppercase">Vision</h1>
                <p className=' text-xl'>Exists to assist the marginalized, especially women, through microfinance and the needed education in entrepreneurial skill development, micro-insurance and preventive health training for them to engage in effective micro-enterprise operations.</p>

            </div>
            <div className="w-[ 100px] lg:w-[400px] lg:h-[300px] leading-8 bg-slate-50  rounded-xl shadow-xl p-5 "
                 data-aos='fade-zoom-in' data-aos-delay='1000'>
                <h1 className=" w-[20%] font-serif font-bold border-b-2 border-black py-2 mb-10 text-2xl uppercase">Mission</h1>
                <p className=' text-xl '>This is a world in which there is egalitarian access to productive resources and sufficient information through education for all to engage in enterprises that support a decent living.</p>

            </div>


        </div>
    )
}


export default  Values;