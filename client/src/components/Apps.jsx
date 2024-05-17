import { App } from "../components";
import Wrapper from "../assets/wrappers/Apps";

const Apps = ({ apps }) => {
    return (
        <Wrapper>
            {apps.map((app) => (
                <App key={app.id} app={app} />
            ))}
        </Wrapper>
    );
};

export default Apps;
