import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    gap: 40px;
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

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export default Wrapper;
