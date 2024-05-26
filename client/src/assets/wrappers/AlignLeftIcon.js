import styled from "styled-components";

const Wrapper = styled.span`
    .hamburger {
        width: 24px;
        height: 24px;
        position: relative;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;

        .the-line {
            height: 3px;
            background-color: #333;
            transition: all 0.3s ease;
        }

         &::before,
         &::after {
                height: 3px;
                width: 100%;
                position: absolute;
                content: "";
                transition: all 0.3s ease;
                background-color: #333;
            }

            &::before {
                top: 0px;
            }

            &::after {
                bottom: 0px;
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
