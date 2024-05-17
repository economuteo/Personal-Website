import Wrapper from "../assets/wrappers/Stats";

const Stats = () => {
    return (
        <Wrapper>
            <div className="column">
                <div>
                    <span className="special">2+</span>
                    <p>Experiences</p>
                </div>
            </div>
            <div className="column">
                <div>
                    <span className="special">2+</span>
                    <p>Projects done</p>
                </div>
            </div>
            <div className="column">
                <div>
                    <span className="special">10+</span>
                    <p>Happy Clients</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Stats;
