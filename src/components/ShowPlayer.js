import React, {Component} from 'react';
import axios from 'axios'
import style from 'styled-components';

const Title = style.h1`
  margin: 25px;
`;

const Stats = style.ul`
    margin: 25px;
`;

class ShowPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            playerId: '',
            player: []
        }
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
            this.setState({
                players: data
            })
            this.getSinglePlayer()
    }

     getSinglePlayer() {
       
        const playerData = this.state.players.filter((eachPlayer) => eachPlayer.id === (this.props.playerId))
        this.setState({
            player: playerData
        }, () => console.log('Single Player', this.state.player))
        
    }



    render(){
        return(
            <div className='App'>
                <div> {this.state.player.map(player => {
                return(
                    <div>
                    <Stats>
                    <Title>{player.name}</Title>
                    <img src={player.image}/>
                        <li className='stats'>Events attended in 2018: {player.events}</li>
                        <li className='stats'>Earnings in 2018: ${player.earnings}</li>
                    </Stats>
                    </div>
                )
            })
            }
            </div>
            </div>
        )
    }
}



export default ShowPlayer;