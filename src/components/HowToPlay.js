import React, {Component} from 'react';
import axios from 'axios'
import style from 'styled-components';

const Title = style.h1`
  margin: 25px;
`;

class How extends Component {
    constructor(props) {
        super(props)
        this.state = {
           posts: []
        }
    }





    render () {
        return(
            <div className='App'>
                <Title>What is Disc Golf?</Title>
                <p className='rules'>Disc golf (occasionally called Frisbee golf or frolf) is a flying disc sport in which players throw a disc at a target; it is played using rules similar to golf. It is often played on a course of 9 or 18 holes. Players complete a hole by throwing a disc from a tee area toward a target, throwing again from the landing position of the disc until the target is reached. Usually, the number of throws a player uses to reach each target are tallied (often in relation to par), and players seek to complete each hole, and the course, in the lowest number of total throws.</p>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/hfHnT1HilMM"
                frameborder="0"></iframe>
            </div>

        )
    }
}

export default How;