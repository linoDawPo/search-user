import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';

const SearchUserVM = Element =>
    class extends Component {
        constructor(props) {
            super(props);
            autoBind(this);
            this.state = {
                userData: [],
                userKeywordSearch: '',
            }
        }
        
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        userData: data
                    })
                })
        }

        handleSearchUser(e) {
            const keyword = e.target.value

            this.setState({
                userKeywordSearch: keyword,
            })
        }

        clearKeywordSearch() {
            this.setState({
                userKeywordSearch: ''
            })
        }

        render() {
            const {
                userData,
                userKeywordSearch,
            } = this.state

            const searchName = (item, userKeywordSearch) => _.includes(item.name.toLowerCase(), userKeywordSearch.toLowerCase());
            const searchUserName = (item, userKeywordSearch) => _.includes(item.username.toLowerCase(), userKeywordSearch.toLowerCase());
            const searchEmail = (item, userKeywordSearch) => _.includes(item.email.toLowerCase(), userKeywordSearch.toLowerCase());
            const searchPhoneNumber = (item, userKeywordSearch) => _.includes(item.phone, userKeywordSearch);
            const searchUserDetails = item => searchName(item, userKeywordSearch) || searchUserName(item, userKeywordSearch) || searchEmail(item, userKeywordSearch) || searchPhoneNumber(item, userKeywordSearch);
            const dataToDisplay = userData.filter(searchUserDetails);

            const props = {
                handleSearchUser: this.handleSearchUser,
                clearKeywordSearch: this.clearKeywordSearch,
                dataToDisplay,
                ...this.state,
            }

            return <Element {...props}/>
        }
    }

    export default SearchUserVM;