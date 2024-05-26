import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    .special1 {
        text-align: center;
        margin-bottom: 18px;
        font-family: "Lato Bold";
        color: var(--foundation-light);
    }
    .special2 {
        text-align: center;
        font-family: "Lato Medium";
        color: var(--foundation-dark-active);
    }

    form {
        input,
        select {
            height: 54px;
        }

        textarea {
            padding: 20px;
            height: 162px;
            resize: none;
        }

        input,
        select,
        textarea {
            box-sizing: border-box;
            border: 0px;
            border-radius: 10px;
            padding-left: 24px;
            background: var(--special-color);
            color: var(--foundation-dark-hover);
            transition: border 0.3s ease, box-shadow 0.3s ease;
        }

        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border: 3px solid var(--fuondation-dark-hover);
            box-shadow: 0px 0px 10px var(--foundation-dark-hover);
        }
    }

    .sendButton {
        box-sizing: border-box;
        margin: auto;
        border: 3px solid var(--foundation-dark-hover);
        border-radius: 10px;
        font-family: "Lato Bold";
        color: var(--foundation-dark-hover);
    }
    a {
        text-decoration: none;
    }
    .sendButton:hover {
        background: var(--foundation-dark-hover);
        color: var(--primary-50);
    }

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        .special1 {
            font-size: 24px;
        }
        .special2 {
            font-size: 16px;
            margin-bottom: 40px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 20px;

            input,
            select {
                width: 100%;
                max-width: 382px;
            }
            textarea {
                width: 100%;
                max-width: 382px;
            }
        }

        .sendButton {
            padding: 8px 24px;
        }
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1328px) {
        .special1 {
            font-size: 40px;
        }
        .special2 {
            font-size: 20px;
            margin-bottom: 50px;
        }

        form {
            margin-bottom: 40px;
            display: grid;
            grid-template-columns: repeat(2, auto);
            justify-content: center;
            gap: 30px;
            input,
            select {
                width: 491px;
            }
            textarea {
                width: 491px;
            }
        }

        .sendButton {
            padding: 12px 40px;
        }
    }
`;

export default Wrapper;
