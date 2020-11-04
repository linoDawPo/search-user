import React from 'react';
import styled from 'styled-components';

import Search from '../components/search';
import UserCard from '../components/user-card';

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
`

const MainCard = styled.div`
    border: 1px solid;
    border-radius: 4px;
    justify-content: center;
    width: 60%;
`

const SearcUserContainer = (props) => {
    const {
        handleSearchUser,
        userKeywordSearch,
        dataToDisplay,
        clearKeywordSearch,
    } = props;

    return(
        <MainDiv >
            <MainCard className='row'>
                < Search
                    onChange={handleSearchUser}
                    value={userKeywordSearch}
                    onClickClear={clearKeywordSearch}
                    />
                {dataToDisplay.map(data =>
                    < UserCard
                        details={data}
                    />
                    )}
            </MainCard>
        </MainDiv>
    )
}

export default SearcUserContainer;