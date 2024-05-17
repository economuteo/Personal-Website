import styled from "styled-components";

const Wrapper = styled.footer`
    background: var(--special-color);

    .footer-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ::after {
            content: "";
            height: 1px;
            background: linear-gradient(to right, transparent, red, transparent);
            margin-bottom: 20px;
        }
        .da {
            margin: 0px;
        }
    }
    .footer-quote {
        text-align: center;
        font-family: "Lato Medium";
        color: var(--foundation-dark-hover);
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        padding-top: 28px;
        padding-bottom: 24px;
        .footer-content {
            gap: 20px;
            ::after {
                width: 90%;
            }
        }
        .footer-quote {
            font-size: 16px;
        }
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktops */
    @media only screen and (min-width: 1260px) {
        padding-top: 56px;
        padding-bottom: 28px;
        .footer-content {
            gap: 40px;
            ::after {
                width: 35%;
            }
        }
        .footer-quote {
            margin: 20px 0px;
            font-size: 20px;
        }
    }
`;

export default Wrapper;
