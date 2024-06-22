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
        font-size: 16px;
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
        object-fit: cover;
    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .short-description {
        padding: 0px 20px;
        margin-bottom: 24px;
        font-size: 16px;
        font-family: "Lato Medium";
        text-align: center;
        color: var(--foundation-dark-hover);
        line-height: 160%;
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
        box-sizing: border-box;
        padding: 20px 0px;
        border-radius: 20px;
        width: 75%;
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

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        .profile-img {
            margin-bottom: 20px;
            width: 100%;
            height: 351px;
        }

        .special-download-button {
            font-size: 20px;
            font-size: 14px;
            margin: auto;
            width: 186px;
            height: 40px;
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
