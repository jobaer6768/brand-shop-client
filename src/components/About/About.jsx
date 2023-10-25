

const About = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center my-6 text-orange-400">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <div className="bg-base-200 p-6 rounded-lg shadow-md">
                        <span className="text-xl font-semibold mr-2">Quality Assurance:</span>
                        <span className="text-sm font-medium opacity-75">
                            We meticulously curate our product selection to ensure you have access to the highest-quality devices and software. We stand behind the brands we carry, including Google, Microsoft, Dell, HP, Samsung, Apple, and Intel.
                        </span>
                    </div>
                    <div className="bg-base-200 p-6 rounded-lg shadow-md">
                        <span className="text-xl font-semibold mr-2">Tech Expertise:</span>
                        <span className="text-sm font-medium opacity-75">
                            Our team comprises tech experts who stay on the cutting edge of industry trends. We're constantly updating our inventory to bring you the latest innovations and solutions.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-base-200 p-6 rounded-lg shadow-md">
                        <span className="text-xl font-semibold mr-2">Customer-Centric Approach:</span>
                        <span className="text-sm font-medium opacity-75">
                            Your satisfaction is our top priority. Our friendly and knowledgeable customer support team is always here to assist you with any questions or concerns, ensuring a seamless shopping experience.
                        </span>
                    </div>
                    <div className="bg-base-200 p-6 rounded-lg shadow-md">
                        <span className="text-xl font-semibold mr-2">Community:</span>
                        <span className="text-sm font-medium opacity-75">
                            We're not just a store; we're a community of tech enthusiasts. Join us in exploring the ever-evolving world of technology through our blog, forums, and social media channels.
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;