import { FaLocationArrow, FaRegClock, FaPhone, FaBookOpen } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className="text-center p-10">
                <h2 className="text-5xl font-bold text-orange-400 mb-6">Contact Us</h2>
                <p className="mt-4 mb-10 opacity-60">
                    Welcome to our event management company's "Contact Us" page! We're delighted that you're interested in getting in touch with us.At [Your Company Name], we understand that successful events are built on effective communication and collaboration. Whether you're planning a wedding, birthday party, corporate gathering, or any other special occasion, our dedicated team is here to assist you every step of the way.Got questions about our services, pricing, or availability? Need personalized event planning advice? Want to discuss your unique event ideas? We're just a message or a phone call away.
                </p>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 mt-20">
                    <div className="card bg-gray-100 rounded-xl">
                        <figure className="px-10 pt-10">
                            <FaLocationArrow className='text-red-300 text-3xl'></FaLocationArrow>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-semibold">Postal Address</h2>
                            <div className='mt-2 opacity-85'>
                                <p>Unica Event Agency</p>
                                <p>85 Fentiman Ave</p>
                                <p>Ottawa, ON K1S 0T7</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-gray-100 rounded-xl">
                        <figure className="px-10 pt-10">
                            <FaRegClock className='text-red-300 text-3xl'></FaRegClock>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-semibold">Phone & E-mail</h2>
                            <div className='mt-2 opacity-85 font-semibold'>
                                <p>Phone: <span className='text-orange-300'>1-800-64-38</span></p>
                                <p>Fax: 1-800-64-39</p>
                                <p className='text-orange-300'>office@fable.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-gray-100 rounded-xl">
                        <figure className="px-10 pt-10">
                            <FaPhone className='text-red-300 text-3xl'></FaPhone>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-semibold">Open Hours</h2>
                            <div className='mt-2 opacity-85'>
                                <p>Monday – Friday</p>
                                <p>8.00 am – 5.00 pm</p>
                                <p>Weekend Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;