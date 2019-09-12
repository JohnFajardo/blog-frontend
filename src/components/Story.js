import React from "react"

class Story extends React.Component {
    state={
        story: {}
    }
   
    componentDidMount(){
        fetch(`http://localhost:3000/stories/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(story => this.setState({story}));
    }

    render(){
        return (
            <section>
                <div className="container py-3 px-0 pl-0">
                    <div className="card p-5">
                        <h1>{this.state.story.title}</h1>
                        <div>{this.state.story.body}</div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Story