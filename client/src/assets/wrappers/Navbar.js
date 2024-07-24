import styled from "styled-components";

const Wrapper = styled.nav`
    width: 100% !important;
    box-sizing: border-box;
    margin-top: 10px;
    position: sticky;
    top: 0px;
    z-index: 1000;
    background-color: var(--initial-background-color);
    transition: background-color 0.3s ease;

    &.scrolled {
        padding: 10px 20px;
        margin-top: 0px;
        background-color: black;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    .align-icon {
        width: 24px;
        height: 24px;
    }

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
        /* Additional styles for larger screens can be added here */
    }
`;

export default Wrapper;
