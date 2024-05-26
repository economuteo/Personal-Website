import Wrapper from "../assets/wrappers/DownloadCV";
import Resume from "../assets/cv/Resume.pdf";

const DownloadCV = () => {
    return (
        <Wrapper>
            <a href={Resume} download>
                Download CV
            </a>
        </Wrapper>
    );
};

export default DownloadCV;
