import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .introduction {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
    }

    .special1 {
        justify-content: center;
        font-family: "Lato Bold";
        color: var(--foundation-light);
    }
    .special2 {
        font-family: "Lato Medium";
        color: var(--foundation-dark-active);
    }

    .about-section {
    }

    .profile-img {
        border-radius: 20px;
        object-fit: cover;
    }

    .description {
        display: flex;
        flex-direction: column;
    }

    .short-description {
        font-family: "Lato Medium";
        text-align: justify;
        color: var(--foundation-dark-hover);
        line-height: 1.9;
    }

    .special-download-button {
        overflow: hidden;
        box-sizing: border-box;
        padding: 12px 30px;
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
        .tech-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            img {
                object-fit: contain;
            }
            span {
                font-family: "Lato Bold";
                color: var(--foundation-dark-hover);
            }
        }
    }

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        .introduction {
            margin-bottom: 40px;
        }

        .special1 {
            font-size: 24px;
        }
        .special2 {
            font-size: 16px;
        }

        .description {
            align-items: center;
        }

        .short-description {
            text-align: center;
        }

        .about-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 70px;
        }

        .profile-img {
            margin-bottom: 20px;
            width: 100%;
            height: 565px;
        }

        .short-description {
            font-size: 16px;
            margin-bottom: 24px;
        }

        .special-download-button {
            font-size: 20px;
            font-size: 14px;
            margin: auto;
            width: 186px;
            height: 40px;
        }

        .tech-stack {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 40px;
            column-gap: 10px;
            .tech-container {
                img {
                    width: 90px;
                    height: 90px;
                }
            }
        }
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1328px) {
        .introduction {
            margin-bottom: 40px;
        }

        .special1 {
            font-size: 40px;
        }
        .special2 {
            font-size: 20px;
        }

        .description {
            align-items: start;
        }

        .about-section {
            margin-bottom: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 100px;
        }

        .profile-img {
            width: 566px;
            height: 808px;
        }

        .short-description {
            margin-bottom: 40px;
            font-size: 20px;
        }

        .special-download-button {
            font-size: 20px;
            width: 224px;
            height: 48px;
        }

        .tech-stack {
            display: flex;
            justify-content: space-between;
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
