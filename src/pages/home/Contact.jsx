/* eslint-disable no-unused-vars */
import contact from "../../assets/contact.jpg";

const Contact = () => {

    return (
        <div className="bg-gray-50 p-5 my-10">

            <h4 className="text-4xl font-extrabold text-violet-500 text-center my-5">Contact US</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-0 gap-5">
                <div className="w-full max-w-lg mx-auto shadow-2xl rounded-2xl bg-base-100 order-2 md:order-1" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="2000">
                    <form className="card-body">
                        <h2 className="text-3xl text-center font-bold">Send Message</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" id="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea required name='message' placeholder="Message" className="bg-gray-100 rounded-lg p-2 h-24" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-warning font-medium">Send</button>
                        </div>
                    </form>
                </div>

                <div className="w-2/3 mx-auto order-1" data-aos="flip-down" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="w-full" src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;