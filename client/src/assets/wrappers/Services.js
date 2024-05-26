import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    justify-content: center;

    .services-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
    }

    .introduction {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .services-introduction-title {
        font-family: "Lato Bold";
        color: var(--foundation-light);
    }
    .services-introduction-description {
        font-family: "Lato Medium";
        line-height: 160%;
        color: var(--foundation-dark-active);
    }

    .card {
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
        .image-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .service-role {
            box-sizing: border-box;
            text-align: center;
            font-size: 1rem;
            line-height: 140%;
            font-family: "Lato Bold";
            color: var(--foundation-orange-normal);
        }
    }
    .card-back {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 10px;
        /* align-items: center; */
        /* justify-content: center; */
        position: absolute;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        background: var(--gradient-2);
        font-family: "Lato Medium";
        .service-description {
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
            color: white;
        }
        .service-description-contactOption {
            border: 2px solid white;
            border-radius: 10px;
            text-decoration: none;
            margin-left: 35px;
            margin-right: 35px;
            color: white;
        }
    }

    /* Responsiveness */

    @media only screen and (max-width: 600px) {
        gap: 24px;

        .introduction {
            gap: 14px;
        }

        .services-introduction-title {
            font-size: 24px;
        }
        .services-introduction-description {
            font-size: 16px;
            text-align: center;
        }

        .image-container {
            width: 34px;
            height: 34px;
            img {
                width: 28px;
                height: 27px;
                object-fit: contain;
            }
        }

        .service-role {
            padding: 0px 10px;
            margin-top: 8px;
            font-size: 20px;
        }

        .services-grid {
            gap: 15px;
        }

        .card {
            height: 186px;
        }
        .card-back {
            gap: 15px;
            .service-description {
                margin-left: 12px;
                margin-right: 12px;
                font-size: 14px;
            }
            .service-description-contactOption {
                font-size: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 12px;
                padding-right: 12px;
            }
        }
    }

    /*Tablets*/
    @media only screen and (min-width: 768px) {
    }

    /*Desktops*/
    @media only screen and (min-width: 1328px) {
        gap: 80px;

        .introduction {
            gap: 18px;
        }

        .services-introduction-title {
            font-size: 40px;
        }
        .services-introduction-description {
            font-size: 24px;
        }

        .services-grid {
            gap: 40px;
        }

        .image-container {
            width: 70px;
            height: 70px;
            img {
                width: 58px;
                height: 56px;
                object-fit: contain;
            }
        }
        .service-role {
            padding: 0px 20px;
            margin-top: 16px;
            font-size: 24px;
        }

        .card {
            height: 386px;
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
