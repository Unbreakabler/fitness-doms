import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
    background-color: red;
    height: 2em;
    // padding: .5em;
    display: flex;
    justify-content: space-between;
    align-items: end;
`
const Title = styled.h3`
    margin: 0;
    height: 1em;
    padding: .5em;
`

const Button = styled.button`
    font-size: 1.5em;
    :hover {
        cursor: pointer;
        color: white;
    }
    text-align: center;
    height: 100%;
    width: 2em;
    border: none;
    background-color: rgba(0,0,0,0)
`

type props = {
    title?: string,
    icon?: string
}

const HeaderNavigation: React.FC<props> = ({
    title="Fitness Tracker",
    icon="+"
}) => {
    return (
        <Header>
            <Title>{title}</Title>
            <Button>{icon}</Button>
        </Header>
    )
}

export default HeaderNavigation