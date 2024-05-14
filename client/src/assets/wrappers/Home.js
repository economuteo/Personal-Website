import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;

    .special1 {
        font-family: "Lato SemiBold";
        color: var(--primary-100);
        font-size: 24px;
    }
    .special2 {
    }
    .special3 {
    }

    .column2 {
        display: flex;
        justify-content: end;
        align-items: center;
    }

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        .special1 {
            font-size: 16px;
        }
        .special2 {
        }
        .special3 {
        }
    }

    @media only screen and (min-width: 768px) {
        .special1 {
            font-size: 40px;
        }
        .special2 {
        }
        .special3 {
        }
    }

    @media only screen and (min-width: 1200px) {
    }
`;

export default Wrapper;
