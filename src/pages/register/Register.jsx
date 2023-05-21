import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-28 mb-10">
            <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                <form className="card-body">
                    <h2 className="text-3xl font-bold text-center">Register</h2>
                    <p className="text-center text-red-600"></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name="name" placeholder="name" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Your Role</span>
                            </label>
                            <select name="role" className="p-2 border-2 rounded-lg w-full">
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>

                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text ">photo url</span>
                        </label>
                        <input required type="text" name="photo" placeholder="photo url" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <button type="submit" className="mt-2 btn btn-warning font-bold">Register</button>

                    <p className="text-center text-gray-600">
                        Already have an Account? <Link className="text-sky-600" to="/login">Login</Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Register;