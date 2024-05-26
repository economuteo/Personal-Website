import styled from "styled-components";

const Wrapper = styled.nav`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        display: none;
    }
    .nav-content {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        .align-icon {
            display: none;
        }
        .logo {
            display: block;
        }
        .nav-content {
            display: block;
        }
    }

    @media only screen and (min-width: 1280px) {
    }
`;

export default Wrapper;
