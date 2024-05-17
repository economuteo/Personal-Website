import Wrapper from "../assets/wrappers/App.js";

const App = ({ app }) => {
    return (
        <Wrapper>
            <img className="app-image" src={app.image} />
            <div className="app-description">
                <span className="app-name">{app.appName}</span>
                <span className="app-categories">{app.category}</span>
            </div>
        </Wrapper>
    );
};

export default App;
