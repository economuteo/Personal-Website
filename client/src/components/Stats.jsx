import Wrapper from "../assets/wrappers/Stats";

const Stats = () => {
    return (
        <Wrapper>
            <span className="column">
                <span className="special">2+</span>
                <p>Experiences</p>
            </span>
            <span className="column">
                <span className="special">2+</span>
                <p>Projects done</p>
            </span>
            <span className="column">
                <span className="special">10+</span>
                <p>Happy Clients</p>
            </span>
        </Wrapper>
    );
};

export default Stats;
