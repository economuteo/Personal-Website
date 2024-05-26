import styled from "styled-components";

const Wrapper = styled.section`
    /* Responsiveness */
    display: flex;
    flex-direction: column;
    align-items: center;

    .introduction {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: introduction;
    }

    .splash-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 382px;
        img {
            max-width: 382px;
            object-fit: cover;
        }
    }
    .splash-container {
        display: none;
    }

    .special0 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
    }

    .special1 {
        margin-bottom: 10px;
        font-family: "Lato Semi Bold";
        font-size: 1rem;
        color: var(--foundation-dark-active);
    }

    .special2 {
        font-family: "Lato Bold";
        font-size: 1.25rem;
        color: var(--foundation-dark-hover);
    }

    .special3 {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 3.125rem;
        font-family: "Lato Black";
        background: var(--gradient-3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .image-grid-child {
        width: 100%;
        max-width: 500px;
        grid-area: imageGridChild;
    }

    .imageContainer {
        position: relative;
        height: 100vw;
        margin: 40px 0px;
        border-radius: 60px;
        overflow: hidden;
        img {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .others {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        grid-area: others;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .splash-container {
        position: absolute;
        top: -5%;
        left: 0%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    /* Split text on one row */
    @media only screen and (min-width: 548px) {
        --gap-size: 12px;
        .special0 {
            flex-direction: row;
            gap: var(--gap-size);
        }
        .special1 {
            font-size: clamp(1.25rem, 5vw, 1.875rem);
            margin-bottom: 0px;
        }
        .special2 {
            font-size: clamp(1.25rem, 5vw, 1.875rem);
            font-family: "Lato Semi Bold";
        }
        .special3 {
            flex-direction: row;
            gap: var(--gap-size);
        }
        .image-container {
            height: 548px;
        }
    }

    @media only screen and (min-width: 768px) {
        .special1 {
            font-size: 1.875rem;
            margin-bottom: 0px;
        }
        .special2 {
            font-size: 1.875rem;
        }
        .imageContainer {
            height: 500px;
            width: 500px;
        }
    }

    @media only screen and (min-width: 1328px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        grid-template-areas:
            "introduction-mobileScreens imageGridChild"
            "others imageGridChild";

        .introduction {
            align-items: start;
            grid-area: introduction-mobileScreens;
        }

        .special0 {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 10px;
        }
        .special1 {
            margin-bottom: 0px;
            font-size: 24px;
        }
        .special2 {
            margin-bottom: 0px;
            font-family: "Lato Bold";
            font-size: 28px;
        }
        .special3 {
            margin-bottom: 17px;
            display: flex;
            flex-direction: column;
            gap: 0px;
            font-size: 70px;
            letter-spacing: 3%;
            text-align: start;
        }

        .splashImage {
            width: 601px;
            height: 517px;
            box-sizing: border-box;
            position: absolute;
            top: 0%;
            left: 0%;
            z-index: -1;
        }

        .image-grid-child {
            max-width: 100%;
            display: flex;
            justify-content: end;
            grid-area: imageGridChild;
        }

        .imageContainer {
            width: 466px;
            height: 596px;
            border-radius: 30px;
        }

        .others {
            display: flex;
            flex-direction: column-reverse;
            align-items: start;
            gap: 0px;
            grid-area: others;
        }

        .buttons {
            margin-bottom: 80px;
        }

        .logosExtraStyle {
            margin-bottom: 61px;
        }
    }
`;

export default Wrapper;
