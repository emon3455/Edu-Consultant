import Marquee from "react-fast-marquee";
import ins1 from "../../assets/instructors/ins1.jpg"
import ins2 from "../../assets/instructors/ins2.jpg"
import ins3 from "../../assets/instructors/ins3.jpg"
import ins4 from "../../assets/instructors/ins4.jpg"
import ins5 from "../../assets/instructors/ins5.jpg"
import ins6 from "../../assets/instructors/ins6.jpg"
import ins7 from "../../assets/instructors/ins7.jpg"
import ins8 from "../../assets/instructors/ins8.jpg"

const Teachers = () => {
    return (
        <div className="my-10">

            <h2 className="text-4xl text-center font-extrabold text-violet-600 mb-10">Our Top Instructors</h2>
            <Marquee>
                <div className="grid grid-cols-8 md:grid-cols-4 gap-5 p-4">
                    
                    <div className="card shadow-2xl p-2">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins1} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Mark Adam</h4>
                    </div>
                    <div className="card shadow-2xl p-2">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins2} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Shila Khan</h4>
                    </div>
                    <div className="card shadow-2xl p-2">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins3} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Dr. Mark</h4>
                    </div>
                    <div className="card shadow-2xl p-2 mr-5">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins4} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">John Doe</h4>
                    </div>
                    <div className="card shadow-2xl p-2">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins5} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Samad Mia</h4>
                    </div>

                    <div className="card shadow-2xl p-2">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins6} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Elabo Sheikh</h4>
                    </div>
                    
                    <div className="card shadow-2xl p-2">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins7} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Nyla Ria</h4>
                    </div>
                    <div className="card shadow-2xl p-2 mr-5">
                        <img  className=" w-80 h-44 image-full rounded-lg" src={ins8} alt="teachers" />
                        <h4 className="text-2xl font-bold text-center">Sumaiya Khatun</h4>
                    </div>

                </div>
            </Marquee>

        </div>
    );
};

export default Teachers;