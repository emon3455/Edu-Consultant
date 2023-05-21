/* eslint-disable react/no-unescaped-entities */
import bnr from "../../assets/bnr.jpg";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bnr})` }}>
            <div className="hero-overlay bg-black bg-blend-multiply bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-semibold">
                        Welcome To <br />
                        <span>Edu-Consultant BD !!!</span>
                    </h1>
                    <p className="mb-5">
                    Discover personalized guidance for academic success. Access resources, receive mentorship, and navigate educational milestones with confidence. Empower your learning journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;