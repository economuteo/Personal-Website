import styled from "styled-components";

const Wrapper = styled.footer`
    --footer-gap: 30px;
    padding-top: 40px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--footer-gap);
    background: var(--special-color);

    .nav-content {
        display: none;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        .contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .contact-info {
            display: flex;
            align-items: center;
            gap: 14px;
            img {
                width: 24px;
                height: 24px;
            }
            a {
                color: var(--foundation-dark-hover);
                text-decoration: none;
            }
        }
    }

    .footer-quote {
        position: relative;
        font-size: 16px;
        font-family: "Lato Medium";
        text-align: center;
        color: var(--foundation-dark-hover);
        ::after {
            width: 100%;
            height: 1px;
            position: absolute;
            top: calc(var(--footer-gap) / -2);
            left: 0%;
            content: "";
            background: linear-gradient(to right, transparent, red, transparent);
        }
    }

    @media only screen and (min-width: 768px) {
        .footer-content {
            gap: 40px;
            .contact {
                flex-direction: row;
            }
        }
        .nav-content {
            display: block;
        }
    }

    @media only screen and (min-width: 1280px) {
    }
`;

export default Wrapper;
