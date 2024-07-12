import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    .hamburger {
        width: 100%;
        height: 100%;
        position: relative;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;

        .the-line {
            height: 3px;
            background-color: white;
            transition: all 0.3s ease;
        }

        &::before,
        &::after {
            height: 3px;
            width: 100%;
            position: absolute;
            content: "";
            background-color: white;
            transition: all 0.3s ease;
        }

        &::before {
            top: 0px;
        }

        &::after {
            bottom: 1px;
        }

        &.animate {
            .the-line {
                transform: scale(0);
            }

            ::before {
                top: calc(50% - 1.5px);
                transform: rotate(135deg);
            }

            ::after {
                bottom: calc(50% - 1.5px);
                transform: rotate(-135deg);
            }
        }
    }
`;

export default Wrapper;
