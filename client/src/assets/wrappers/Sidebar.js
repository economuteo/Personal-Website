import styled from "styled-components";

const Wrapper = styled.section`
    width: 100vw;
    height: calc(100vh - 71px);
    box-sizing: border-box;
    position: absolute;
    top: 71px;
    left: 0px;
    z-index: 100;
    background: var(--background-color);

    .navulcontent {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .link {
            box-sizing: border-box;
            padding: 20px 0px;
            border-bottom: 1px solid var(--foundation-dark-hover);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a {
            height: 100%;
            color: var(--foundation-dark-hover);
            font-family: "Lato Medium";
            font-size: 20px;
            text-decoration: none;
        }

        .active {
            color: var(--foundation-orange-normal);
        }
    }

    /* Animation part */
    animation: ${(props) =>
        props.sidebarAnimation ? "slideIn 0.3s forwards" : "slideOut 0.3s forwards"};

    @keyframes slideIn {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(-24px);
        }
    }

    @keyframes slideOut {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`;

export default Wrapper;
