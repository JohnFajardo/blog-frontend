import React from "react";
import Stories from "./Stories";

class MainContainer extends React.Component {

    state= {
        stories: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/stories")
        .then(response => response.json())
        .then(stories => this.setState({stories}))
    }

    render(){
        return(
            <Stories stories={this.state.stories}/>
        );
    }
}

export default MainContainer