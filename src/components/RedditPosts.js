import React, {Component} from 'react';
import axios from 'axios'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
           posts: []
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    async getPosts(){
        const response = await axios.get('https://www.reddit.com/r/discgolf.json')
        const data = response.data
        console.log(data)
        this.setState({
            posts: data
        })
        console.log(data)
    }




    render () {
        return(
            <div className='App'>
              {/* {this.state.posts.data.children.map(posts =>
            {     return(
                   <h1>{posts.data.children.title}</h1>
                ) 
           })
            } */}
            </div>

        )
    }
}

export default Posts;