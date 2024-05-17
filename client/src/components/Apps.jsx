import { App } from ".";

const Apps = ({ apps }) => {
    return (
        <div>
            {apps.map((app) => (
                <App key={app.id} app={app} />
            ))}
        </div>
    );
};

export default Apps;
