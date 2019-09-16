import React, {Component} from 'react';
import './App.css';
import Players from './components/Players'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowPlayer from './components/ShowPlayer'
import Posts from './components/RedditPosts'
import axios from 'axios'
import style from 'styled-components';

const HeaderNav = style.section`
        background-color: #63B4D1;
        padding: 15px;
        color: #F64C72;
    `;

const Body = style.section`
    background-color: #2F2FA2;
`;

class Player extends Component {
    constructor (props) {
        super(props)
        this.state = {
            players: [],
            playerId: ""
        }
        if (this.state.playerId !== ""){
            console.log("Updated ID", this.state.playerId)
        }
        this.handleClick = this.handleClick.bind(this)
       
    }

    async handleClick(id) {
        await this.setState({
            playerId: id
        })
      console.log(this.state.playerId)
    }


    
    
    render() {
        return(
            <div>
                 <Router className='nav'>
                     <HeaderNav>
                        <nav>
                            <Link className='link' to='/'>Home</Link>
                            <Link className='link' to='/posts/'>Interesting Reddit Posts</Link>
                        </nav>
                    </HeaderNav>
                    <body>

                    
                        <Route path="/" exact render={props => (
                            <Players {...props} handleClick = {this.handleClick}/>
                        )}
                            />
                        <Route path={`/player/${this.state.playerId}`}
                        render={props => (
                            <ShowPlayer playerId={this.state.playerId}
                            {...props}
                            />
                        )}/>
                        <Route path={`/posts/`}
                        render={props => (
                            <Posts {...props} />
                        )}/>
                    </body>
                </Router>
                
            </div>
            
        )
    }
}

export default Player;
