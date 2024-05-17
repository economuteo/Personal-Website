import styled from "styled-components";

const Wrapper = styled.div`
    /* Constant values */
    position: relative;

    .introduction-mobileScreens {
        grid-area: introduction-mobileScreens;
        display: inline;
    }

    .splashImage {
        position: absolute;
    }

    .special1 {
        font-family: "Lato SemiBold";
        color: var(--foundation-dark-active);
    }
    .special2 {
        font-family: "Lato Bold";
        color: var(--foundation-dark-hover);
    }
    .special3 {
        font-family: "Lato Black";
        background: var(--gradient-3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .others-mobileScreens {
        grid-area: others-mobileScreens;
    }

    .buttons {
        display: flex;
        align-items: center;
    }

    .image-grid-child {
        grid-area: imageGridChild;
    }

    .imageContainer {
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-rows: repeat(3, auto);
        grid-template-areas:
            "introduction-mobileScreens"
            "imageGridChild"
            "others-mobileScreens";
        align-items: center;

        .splashImage {
            top: 0%;
            left: 10%;
            width: 382px;
            height: 355px;
            box-sizing: border-box;
            position: absolute;
            z-index: -1;
        }

        .introduction-mobileScreens {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .special1 {
            margin-bottom: 10px;
            font-size: 16px;
        }
        .special2 {
            margin-bottom: 24px;
            font-size: 20px;
        }
        .special3 {
            font-size: 50px;
        }

        .buttons {
            gap: 24px;
        }

        .image-grid-child {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .others-mobileScreens {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            gap: 25px;
        }

        .imageContainer {
            width: 382px;
            height: 327px;
            border-radius: 60px;
            margin-top: 30px;
            margin-bottom: 30px;
            position: relative;
            img {
                position: absolute;
                width: 100%;
                height: 327px;
                object-position: center 100%;
                object-fit: cover;
            }
        }
    }

    /* Tablet */
    @media only screen and (min-width: 601px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        grid-template-areas:
            "introduction-mobileScreens imageGridChild"
            "others-mobileScreens imageGridChild";

        .splashImage {
            width: 601px;
            height: 517px;
            top: 0%;
            left: 0%;
            z-index: -1;
            position: absolute;
            box-sizing: border-box;
        }

        .special1 {
            margin-bottom: 10px;
            font-size: 24px;
        }
        .special2 {
            margin-bottom: 24px;
            font-size: 28px;
        }
        .special3 {
            margin-bottom: 17px;
            font-size: 70px;
        }

        .buttons {
            margin-bottom: 80px;
            gap: 24px;
        }

        .logosExtraStyle {
            margin-bottom: 61px;
        }

        .image-grid-child {
            display: flex;
            justify-content: end;
            align-items: center;
        }

        .imageContainer {
            width: 466px;
            height: 596px;
            border-radius: 30px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
`;

export default Wrapper;
