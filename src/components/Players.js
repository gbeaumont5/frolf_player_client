import React, {Component} from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import style from 'styled-components';
import '../App.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Title = style.h1`
  margin: 25px;
`;


class TopPlayers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            search: '',
            searchData: [],
            playerId: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.renderData = this.renderData.bind(this)
       
    }

    componentDidMount() {
        this.getPlayers()
        
    }

    async getPlayers () {
        const response = await axios.get(`https://frolf-player-api.herokuapp.com/players`)
        const data = response.data
        console.log(data)
        data.forEach(function(image){
            if (image.image === ""){
                image.image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
        })
        data.forEach(function(player){
            player.name = player.name.toLowerCase();
        })
        this.setState({
            players: data
        })
        console.log("state:", this.state.players)
    }

    getSearchData(event) {
        event.preventDefault()
        const playerData = this.state.players.filter((eachPlayer) => eachPlayer.name.match(this.state.search))
        this.setState({
            searchData: playerData
        }, () => console.log(this.state.searchData))
        console.log(playerData)
    }

    
    async handleInputChange(event) {
        event.preventDefault()
        console.log('click')
        let search = event.target.value;
        search = search.toLowerCase();
        await this.setState({
            search: search
        })
        await console.log(this.state.search)
       
    }

    renderData() {
        this.state.searchData.forEach(input => {
            return this.state.searchData.input
        });
        console.log(this.renderData)
    }


    render() {
        return (
            <div className='App'>

            <>
            <Title>Search Professional Disc Golf  Players!</Title>
            <form onSubmit={(event) => this.getSearchData(event)}>
                <input className='search'
                type='text' placeholder='search here' 
                value={this.state.search}
                onChange={ this.handleInputChange }
                />

                
                <button className='button' type='submit' value="Search">Search</button>
            </form>
            
            <div className='flexResults'> {this.state.searchData.map(player => {
                return(
                    <Link to={`player/${player.id}`}
                    onClick={(id) => {
                        this.props.handleClick(player.id);
                        
                    }}
                    >
                        
                        <Card className='playerCard' style={{width: '18rem'}}>
                            <CardImg top width="100%" src={player.image} alt="Player Profile Pic" />
                            <CardBody>
                            <CardTitle className='cardTitle'>{player.name}</CardTitle>
                            </CardBody>
                        </Card>
                      
                   
                    </Link>
                )
            })
            }
            </div>
        </>
        </div>
        )
    }

}

export default TopPlayers