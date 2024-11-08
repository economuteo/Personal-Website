import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .introduction {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
    }

    .special1 {
        justify-content: center;
        font-family: "Lato Bold";
        font-size: 24px;
        color: var(--foundation-light);
    }
    .special2 {
        font-family: "Lato Medium";
        font-size: 24px;
        color: var(--foundation-dark-active);
    }

    .about-section {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .profile-img {
        border-radius: 20px;
        object-fit: contain;
    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .short-description {
        margin-top: 10px;
        padding: 0px 20px;
        margin-bottom: 24px;
        font-family: "Lato Medium";
        text-align: center;
        color: var(--foundation-dark-hover);
        line-height: 160%;
    }

    .special-download-button {
        overflow: hidden;
        box-sizing: border-box;
        padding: 12px 30px;
        margin-top: 50px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: "Lato Bold";
        background: var(--gradient-4);
        color: var(--primary-50);
    }

    .tech-stack {
        box-sizing: border-box;
        padding: 20px 0px;
        border-radius: 20px;
        width: 85%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 40px;
        background-color: #1e1e1e;
        .tech-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            img {
                width: 50px;
                height: 50px;
                object-fit: contain;
            }
            span {
                font-family: "Lato Bold";
                color: var(--foundation-dark-hover);
            }
        }
    }

    .profile-img {
        width: 100%;
        margin-bottom: 20px;
        height: 351px;
    }

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        .special-download-button {
            font-size: 20px;
            font-size: 14px;
            width: 186px;
            height: 40px;
        }
    }

    @media only screen and (min-width: 768px) {
        font-size: 1.25em;
    }

    @media only screen and (min-width: 1328px) {
        .introduction {
            margin-bottom: 40px;
        }

        .about-section {
            display: flex;
            flex-direction: row;
        }

        .special1 {
            font-size: 40px;
        }

        .description {
            align-items: start;
        }

        .about-section {
            margin-top: 40px;
            margin-bottom: 50px;
            display: flex;
            justify-content: space-between;
            align-items: start;
            gap: 100px;
        }

        .profile-img {
            width: 566px;
            height: 700px;
        }

        .short-description {
            text-align: center;
            font-size: 1.85rem;
        }

        .special-download-button {
            font-size: 20px;
            width: 224px;
            height: 48px;
        }

        .tech-stack {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            .tech-container {
                img {
                    width: 130px;
                    height: 130px;
                }
            }
        }
    }
`;

export default Wrapper;
