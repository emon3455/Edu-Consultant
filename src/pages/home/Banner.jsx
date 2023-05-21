/* eslint-disable react/no-unescaped-entities */
import bnr from "../../assets/bnr.jpg";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bnr})`}}>
            <div className="hero-overlay bg-black bg-blend-multiply bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <div className="mb-5 text-5xl font-extrabold">
                        <div className="text-pink-600" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">Welcome To</div>
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">Edu <span className="text-sky-600">Consultant</span> BD !!!</div>
                    </div>
                    <p className="mb-5 text-gray-00">
                        Discover personalized guidance for academic success. Access resources, receive mentorship, and navigate educational milestones with confidence. Empower your learning journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;