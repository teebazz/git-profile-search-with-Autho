import React, { Component } from 'react'

export class Search extends Component {
    sumitSearch = (e) =>{
        e.preventDefault();
        let username = this.refs.username.value;
        this.props.searchProfile(username);
        this.refs.username.value = '';
    }
    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.sumitSearch}>
                    <label>
                        <input type="search" ref="username" placeholder="type username and hit enter" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Search
