
import topic2 from "../../assets/topics/topic2.jpeg"
import topic3 from "../../assets/topics/topic3.jpeg"
import topic4 from "../../assets/topics/topic4.jpg"
import topic5 from "../../assets/topics/topic5.jpeg"

const Subjects = () => {
    return (
        <div className="my-10 p-2">

            <h2 className="text-4xl text-center font-extrabold text-violet-600 mb-10">Most Consulted Subjects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                <div className="card shadow-2xl">

                    <div className="">
                        <img className="" src={topic2} alt="" />
                    </div>

                    <div className="card-body">
                        <h3 className="card-title">
                            Subject: Data Scientist
                        </h3>
                        <h4 className="text-lg font-medium">
                            Instructor: Saiful Azad
                        </h4>
                        <button className="btn btn-info btn-sm">View Details</button>
                    </div>

                </div>

                <div className="card shadow-2xl">

                    <div className="">
                        <img className="" src={topic4} alt="" />
                    </div>

                    <div className="card-body">
                        <h3 className="card-title mt-3">
                            Subject: Machine Learning
                        </h3>
                        <h4 className="text-lg font-medium">
                            Instructor: Sumaiya Kabir
                        </h4>
                        <button className="btn btn-info btn-sm">View Details</button>
                    </div>

                </div>

                <div className="card shadow-2xl">

                    <div className="">
                        <img className="" src={topic3} alt="" />
                    </div>

                    <div className="card-body">
                        <h3 className="card-title">
                            Subject: Micro Biology
                        </h3>
                        <h4 className="">
                            Instructor: Atik Hasan
                        </h4>
                        <button className="btn btn-info btn-sm">View Details</button>
                    </div>

                </div>
                <div className="card shadow-2xl">

                    <div className="">
                        <img className="" src={topic5} alt="" />
                    </div>

                    <div className="card-body">
                        <h3 className="card-title">
                            Subject: Web Development
                        </h3>
                        <h4 className="">
                            Instructor: Jankar Mahbub
                        </h4>
                        <button className="btn btn-info btn-sm">View Details</button>
                    </div>

                </div>

            </div>

            <div className="text-center my-5">
                <button className="btn btn-warning">View More</button>
            </div>

        </div>
    );
};

export default Subjects;