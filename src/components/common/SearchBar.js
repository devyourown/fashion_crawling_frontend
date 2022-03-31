import React, {useRef, useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import {Button, ButtonGroup, Form, InputGroup} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const slideUp = keyframes`
    from {
        height: 450px;
    }
    to {
        height: 200px;
    }
`;

const SearchBarBlock = styled.div`
    display: flex;
    height: 450px;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    ${props => props.isSubmited && css`
        animation: ${slideUp} 1s;
        animation-fill-mode: forwards;
    `}
`;

const FormBlock = styled.div`
    width: 450px;
    height: 50px;
    margin: auto;
`;

const SearchBar = ({onSubmit}) => {
    const [disabled, setDisabled] = useState(false);
    const onClick = () => {
        setDisabled(true);
    }

    return (
        <SearchBarBlock isSubmited={disabled}>
            <FormBlock>
            <Form className="d-flex" onSubmit={onSubmit}>
                <InputGroup>
                    <Form.Control type="text" 
                    placeholder='type whatever you want'/>
                    <Button onClick={onClick} variant="outline-success" type="submit">
                            <BsSearch />
                    </Button>
                </InputGroup>
            </Form>
            </FormBlock>
        </SearchBarBlock>
    );
};

export default SearchBar;