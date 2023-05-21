
import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Subjects from "../Subjects";
import Teachers from "../Teachers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Teachers></Teachers>
            <Subjects></Subjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;