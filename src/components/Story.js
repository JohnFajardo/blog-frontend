import React from "react"
import {Link} from "react-router-dom"
//import Edit from "./Edit"

class Story extends React.Component {
    state={
        story: {}
    }
   
    componentDidMount(){
        fetch(`http://localhost:3000/stories/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(story => this.setState({story}));
    }

    lol = (article) => {
        fetch(`http://localhost:3000/stories/${article}`, {
            method: 'DELETE'
        });
    }

    render(){

        return (
            <section>
                <div className="container py-3 px-0 pl-0">
                    <div className="card p-5">
                        <h1>{this.state.story.title}</h1> 
                        <span><Link to={`/stories/${this.state.story.id}/edit/`} id={this.state.story.id}><i className="ion-md-create"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" onClick={event => {this.lol(this.state.story.id)}}><i className="ion-md-trash delete"></i></a></span>

                        <div>{this.state.story.body}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Story