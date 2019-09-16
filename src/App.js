import React, {Component} from 'react';
import './App.css';
import Players from './components/Players'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowPlayer from './components/ShowPlayer'
import Posts from './components/RedditPosts'
import axios from 'axios'

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
                     <header>
                     <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/posts/'>Interesting Reddit Posts</Link>
                    </nav>
                    </header>
                    
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

                </Router>
            </div>
            
        )
    }
}

export default Player;
