import styled from "styled-components";

const Wrapper = styled.div`
    width: 220px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: end;

    img {
        width: 40px;
        height: 40px;
    }

    img:hover {
        transform: translateY(-5px);
    }
`;

export default Wrapper;
