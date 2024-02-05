import React, { useState } from 'react';

const AccordionItem = ({ title, content , toggle}) => {
    return (
        <div
            className="  animate-fade duration-75   h-auto border-b border-gray-black dark:border-black flex  flex-col  items-start justify-center cursor-pointer bg-slate-50 px-2 py-2"
            >

            <p className="mb-2 text-sm lg:text-2xl  rtl:text-right text-black" onClick={toggle}>{title}</p>
            <p className="mb-2 text-gray-500 dark:text-black" onClick={toggle}>{content}</p>
        </div>
    );
};

const Accordion = () => {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: ' 01 TARGETED BUSINESS TRAINING',
            content: [
                'Empower small and micro entrepreneurs with tailored training programs. Our SME training focuses on essential skills, financial literacy, and strategic planning. Micro entrepreneurs benefit from practical insights, fostering growth and sustainability. Emerging entrepreneurs receive guidance on innovation, market dynamics, and effective business management. Elevate your entrepreneurial journey with our comprehensive training initiatives.'
            ]
        },
        {
            id: 'accordion-flush-body-2',
            title: '02 AGRIBUSINESS & AGRICULTURE VALUE CHAIN.',
            content: [
                'Enhance agricultural practices through our Extension Delivery Services, connecting farmers with cutting-edge AGRO-TECH solutions. We bridge gaps by providing valuable market linkages, empowering farmers with the latest agricultural technologies. Elevate your agricultural venture with our comprehensive approach, ensuring efficiency, sustainability, and increased market access.'
            ]
        },
        {
            id: 'accordion-flush-body-3',
            title: '03 DIGITAL LITERACY',
            content: [
                'Experience seamless productivity with our Office Suite, offering versatile tools for efficient work management. Elevate your brand presence through our Social Media and Digital Marketing services, engaging audiences and driving growth. Enter the world of E-commerce with MOJA, a comprehensive platform empowering businesses to thrive in the digital marketplace.'
            ]
        } ,
        {
            id: 'accordion-flush-body-4',
            title: '04 ACCESS TO CAPITAL ',
            content: [
                'Unlock financial opportunities and propel your business forward with our ACCESS TO CAPITAL services. We streamline the funding process, connecting entrepreneurs with diverse capital sources. Whether seeking loans, investors, or grants, we provide strategic guidance, enhancing your financial capabilities and fostering business expansion. Elevate your access to capital and fuel your growth aspirations.'
            ]
        },
        {
            id: 'accordion-flush-body-5',
            title: '05 ADVOCACY',
            content: [
                'Champion your cause with our ADVOCACY services, dedicated to amplifying your voice and driving meaningful change. We craft compelling narratives, engage stakeholders, and navigate policy landscapes to advance your goals. Empower your advocacy efforts with strategic communication and impactful initiatives, ensuring your message resonates and influences positive outcomes.'
            ]
        },
        {
            id: 'accordion-flush-body-6',
            title: '06 WATER, SANITATION & HYGIENE',
            content: [
                '\n' +
                'Promote community well-being with our WATER, SANITATION & HYGIENE initiatives. We implement comprehensive programs to ensure access to clean water, improved sanitation, and hygiene education. By fostering sustainable practices, we empower communities to lead healthier lives. Join us in creating a lasting impact, transforming lives through enhanced water, sanitation, and hygiene solutions.'
            ]
        }
    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionToggle = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div id="accordion-flush" data-accordion="collapse"
             data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
             data-inactive-classes="text-gray-500 dark:text-gray-400" className="w-full">
            {accordionData.map((item, index) => (
                <div key={index}>
                    {openAccordion !== index && (
                        <h2 id={`accordion-flush-heading-${index + 1}`}>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full py-5 text-sm lg:py-8 lg:text-2xl font-serif rtl:text-right text-black border-b border-gray-200 dark:border-black dark:text-black gap-3 animate-fade`}
                                onClick={() => handleAccordionToggle(index)}
                                aria-expanded={openAccordion === index}
                                aria-controls={item.id}
                            >
                                <span>{item.title}</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 rotate-180 shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                    )}

                    <div id={item.id}
                         className={`${openAccordion === index ? 'max-h-96' : 'max-h-0'}`}
                         aria-labelledby={`accordion-flush-heading-${index + 1}`}>
                        {openAccordion === index &&
                            <AccordionItem {...item} toggle={() => handleAccordionToggle(index)}/>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
