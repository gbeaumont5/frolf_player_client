import React, {Component} from 'react';
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import style from 'styled-components';

const Title = style.h1`
  margin: 25px;
`;

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
           posts: {},
           isDataLoaded: false,
           anchorElement: null,
           link: ''
        }
        this.getPosts = this.getPosts.bind(this)
    }

    componentDidMount(){
        this.getPosts()
        // if ( window.location.path !== "https://www.reddit.com" ){
        //     window.location.path = "https://www.reddit.com"
        //   }
    }

    async getPosts(){
        const response = await axios.get('https://www.reddit.com/r/discgolf.json')
        const data = response.data
        console.log(data)
        data.data.children.forEach(function(element) {
            console.log('element', element)
            if (element.data.is_self === true) {
                element.data.url = 'https://daredevildiscs.com/wp-content/uploads/2015/05/blank_cherry.jpg'
            } else if (element.data.domain === 'gfycat.com') {
                element.data.url = 'https://daredevildiscs.com/wp-content/uploads/2015/05/blank_cherry.jpg'
            } else if (element.data.thumbnail === 'self'){
                element.data.url = 'https://daredevildiscs.com/wp-content/uploads/2015/05/blank_cherry.jpg'
            } else if (element.data.domain === 'youtu.be') {
                element.data.url = 'https://daredevildiscs.com/wp-content/uploads/2015/05/blank_cherry.jpg'
            }
        })
        this.setState({
            posts: data,
            isDataLoaded: true,
        })

    }
    
    
    
    
    render () {
        console.log('posts', this.state.posts.data)
        return(
            <div className='App'>
            <Title>Check out these interesting Disc Golf posts!</Title>
            
            <div className='flexResults'>
              {this.state.isDataLoaded &&this.state.posts.data.children.map(posts =>
            {     return(
            <a href={posts.data.permalink}>
                <Card className='playerCard' style={{width: '18rem'}}>
                <CardImg top width="100%" src={posts.data.url} alt="Player Profile Pic" />
                <CardBody>
                <CardTitle className='cardTitle'>{posts.data.title}</CardTitle>
                </CardBody>
                
                </Card>
            </a>    
                ) 
           })
            }
            </div>
            </div>

        )
    }
}

export default Posts;