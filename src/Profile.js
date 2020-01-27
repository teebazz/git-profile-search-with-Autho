import React, { Component } from 'react'

export class Profile extends Component {    
    render() {
        let userData = this.props.profile;
        let followers = `${userData.homeUrl}/followers`;
        let following = `${userData.homeUrl}/following`;
        let repos = `${userData.homeUrl}/repositories`;
        var main;
        if(userData.notFound === 'Not Found'){
            main = <div className="notfound">
            <h2>Heyyyu</h2>
            <p>Are you sure of who re logging for</p>
            </div>;
        }else{
            main = 
            <section className="github-profile">
                <div className='github-profile-info'>
                    <a href={userData.homeUrl} title={userData.name || userData.username}><img src={userData.avatar}/></a>
                    <h2><a href={userData.homeUrl} title={userData.name || userData.username}>{userData.name || userData.username}</a></h2>
                    <h3>{userData.location}</h3>
                </div>
                <div className="github-profile-state">
                    <ul>
                        <li>
                            <a href={followers} title="Number of followers" target="_blank"><i>{userData.followers}</i><span>Followers</span></a>
                        </li>
                        <li>
                            <a href={repos} target="_blank" title="Number of Repositories" ><i>{userData.repos}</i><span>Repositories</span></a>
                        </li>
                        <li>
                            <a href={following} target="_blank" title="Number of following" ><i>{userData.following}</i><span>Following</span></a>
                        </li>
                    </ul>
                </div>
            </section>
        }

        return (            
            <div>
                {main}
            </div>
        )
    }
}

export default Profile
