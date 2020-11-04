import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: .5px solid;
    border-radius: 4px;
    margin: 15px;
`

const Label = styled.span`
    column-count: 2;
    padding: 10px;
`

const Value = styled.span`
    column-count: 10;
    font-weight: 700;
    padding: 10px;
`

const UserCard = ({
  details,
}) => {
    const {
        email,
        name,
        phone,
        username,
    } = details;

    return(
        <Card>
            <div >
                <Label>Username:</Label>
                <Value>{username}</Value>
            </div>
            <div>
                <Label>Name:</Label>
                <Value>{name}</Value>
            </div>
            <div>
                <Label>Email:</Label>
                <Value>{email}</Value>
            </div>
            <div>
                <Label>Contact Number:</Label>
                <Value>{phone}</Value>
            </div>
        </Card>
    );
}

export default UserCard;
