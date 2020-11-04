import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import cx from 'classnames';

const StyledClearButton = styled.i.attrs({
    className: 'ti-close',
    })`
    position: absolute;
    right: 0px;
    top: 7px;
    cursor: pointer;
    font-size: 12px;
    `;

const StyledSearch= styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    margin-left: 8px;
    `;


const StyledSearchInput = styled.input`
    padding-left: 2.75em;
    padding-right: 1em;
    border: none !important;
    font-weight: normal;
    line-height: 2;
    &:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;

        &::placeholder {
        color: #ECECEC;
        }
    }
    `;

const Search = ({
    onChange,
    placeholder = 'Search User',
    value,
    onClickClear,
}) => (
    <StyledSearch>
        <StyledSearchInput
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            />
        {(value !== '') &&
        <StyledClearButton onClick={onClickClear} />
        }
    </StyledSearch>
);

export default Search;