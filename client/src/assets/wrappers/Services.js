import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    justify-content: center;
    gap: 24px;
    .services-grid {
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
    }

    .introduction {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }

    .services-introduction-title {
        font-size: 24px;
        font-family: "Lato Bold";
        color: var(--foundation-light);
    }
    .services-introduction-description {
        font-size: 16px;
        font-family: "Lato Medium";
        text-align: center;
        line-height: 160%;
        color: var(--foundation-dark-active);
    }

    .card {
        height: 200px;
        position: relative;
        border-radius: 15px;
        background-color: var(--special-color);
        overflow: hidden;
    }
    .cardContainer {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        transform-style: preserve-3d;
        transition: all 0.5s ease;
    }

    @media (hover: hover) {
        .card:hover .cardContainer {
            transform: rotateY(180deg);
        }
    }
    .cardContainer.rotated {
        transform: rotateY(180deg);
    }
    .card-front {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        backface-visibility: hidden;
    }

    .image-container {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 28px;
            height: 27px;
            object-fit: contain;
        }
    }

    .service-role {
        box-sizing: border-box;
        margin-top: 8px;
        text-align: center;
        display: flex;
        flex-direction: column;
        line-height: 140%;
        font-size: 1.25rem;
        font-family: "Lato Bold";
        color: var(--foundation-orange-normal);
    }

    .card-back {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        position: absolute;
        display: grid;
        grid-template-rows: 1fr auto;
        justify-items: center;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        font-family: "Lato Medium";
        background: var(--gradient-2);
    }
    .service-description {
        box-sizing: border-box;
        max-height: 100%;
        font-size: 0.85rem;
        align-self: center;
        text-align: center;
        color: white;
    }
    .service-description-contactOption {
        box-sizing: border-box;
        padding: 5px;
        border: 2px solid white;
        border-radius: 10px;
        align-self: end;
        font-size: 0.75rem;
        text-decoration: none;
        color: white;
    }

    /* Tablets */
    @media only screen and (min-width: 768px) {
        .services-introduction-title {
            font-size: 2rem;
        }
        .services-introduction-description {
            font-size: 1.25rem;
        }
        .card {
            height: 240px;
        }

        .card-back {
            padding: 15px;
        }
        .service-description {
            font-size: 1.25rem;
        }
        .service-description-contactOption {
            font-size: 1rem;
        }
    }

    /*Desktops*/
    @media only screen and (min-width: 1328px) {
        gap: 80px;

        .introduction {
            gap: 18px;
        }

        .services-introduction-title {
            font-size: 2.5rem;
        }
        .services-introduction-description {
            font-size: 1.5rem;
        }

        .services-grid {
            gap: 40px;
        }

        .image-container {
            width: 70px;
            height: 70px;
            img {
                width: 60px;
                height: 60px;
                object-fit: contain;
            }
        }
        .service-role {
            padding: 0px 20px;
            margin-top: 16px;
            flex-direction: row;
            gap: 8px;
            font-size: 1.875rem;
        }

        .card {
            height: 380px;
        }
        .card-back {
            gap: 35px;
            .service-description {
                margin-left: 35px;
                margin-right: 35px;
                font-size: 30px;
            }
            .service-description-contactOption {
                font-size: 22px;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 25px;
                padding-right: 25px;
            }
        }
    }
`;

export default Wrapper;
