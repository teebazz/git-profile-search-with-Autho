import React, { Component } from 'react'
import Profile from './Profile';
import Search from './Search';
const API ='https://a\pi.github.com/users'
export class GitHub extends Component {    
    constructor(props){
        super(props);
        this.state = {
            username : 'teebazz',
            name : '',
            avatar : '',
            repos : '',
            followers: '',
            following : '',
            homeUrl : '',
            notFound : '',
        }
    }

    componentDidMount(){
        this.getUserInfo(this.state.username);
    }

    getUserInfo = (username)=>{
        let finalUrl = `${API}/${username}`;
        fetch(finalUrl)
        .then((res) => res.json())
        .then(data => {
            this.setState({
                username : data.login,
                name : data.name,
                avatar : data.avatar_url,
                repos : data.public_repos,
                followers: data.followers,
                following : data.following,
                homeUrl : data.html_url,
                notFound : data.message,
            });
            console.log(this.state)
        })
        .catch(e => {
            console.log(e);            
        })
    };
    render() {
        return (
            <div>
               <section id="card">
                   <Search searchProfile={this.getUserInfo}/>
                   <Profile profile={this.state}/>
               </section>
            </div>
        )
    }
}

export default GitHub
