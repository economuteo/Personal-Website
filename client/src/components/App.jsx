import Wrapper from "../assets/wrappers/App.js";

const App = ({ app }) => {
    return (
        <Wrapper>
            <a href={app.link} target="_blank">
                <img className="app-image" src={app.image} />
                <div className="app-description">
                    <span className="app-name">{app.appName}</span>
                    <span className="app-categories">{app.category}</span>
                </div>
            </a>
        </Wrapper>
    );
};

export default App;
