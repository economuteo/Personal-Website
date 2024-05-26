import Wrapper from "../assets/wrappers/ContatctMe";

const ContactMe = () => {
    return (
        <Wrapper className="container">
            <p className="special1">Contact me</p>
            <p className="special2">Cultivating Connections: Reach Out And Connect With Me</p>
            <form>
                <label>
                    <input type="text" name="name" placeholder="Name" />
                </label>
                <label>
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                    <input type="tel" name="phone" placeholder="Phone Number" />
                </label>
                <label htmlFor="serviceOfInterest">
                    <select name="serviceOfInterest" id="serviceOfInterest">
                        <option value="service1">Custom website</option>
                        <option value="service2">Full-Stack Development</option>
                        <option value="service3">Front-End Development</option>
                        <option value="service3">Back-End Development</option>
                    </select>
                </label>
                <label className="project-details">
                    <textarea
                        className="projectDetails"
                        name="projectDetails"
                        placeholder="Project Details..."
                    />
                </label>
            </form>
            <a className="sendButton" href="../assets/cv/EconomuTeo-AntonioResume.pdf">
                <span onClick={() => document.getElementById("contactForm").submit()}>Send</span>
            </a>
        </Wrapper>
    );
};

export default ContactMe;
