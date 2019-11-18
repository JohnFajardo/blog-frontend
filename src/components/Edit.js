import React from "react"
import {Link, Redirect} from "react-router-dom"


class Edit extends React.Component {

    state = {
        id: '',
        title: '',
        body: ''
    }

    componentDidMount(){
        const storyId = this.props.match.params.id;
        fetch(`http://localhost:3000/stories/${storyId}`)
        .then(response => response.json())
        .then(story => this.setState({id: story.id, title: story.title, body: story.body}));
        //.then(story => console.log(story));
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
      }
    
      handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
      }

    handleSubmit = async event => {
        event.preventDefault();
        await fetch(`http://localhost:3000/stories/${this.state.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify({
                title: this.state.title, 
                body: this.state.body
            })
        });
        this.props.history.push(`/stories/${this.state.id}`)
    }

    render(){
        return(
            <section>
                <div className="container py-3 px-0 pl-0">
                    <div className="card p-5">
                        <h1>Editing post</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className={"form-control mb-3"} name="title" value={this.state.title} onChange={this.handleTitleChange} type="text"/>
                            <textarea className={"form-control"} name="body" value={this.state.body} onChange={this.handleBodyChange} />
                            <Link to={""} onClick={() => this.props.history.goBack()} className={"btn btn-danger mt-3"} type="submit">Cancel</Link>
                            <button className={"btn btn-primary mt-3 float-right"} type="submit">Save changes</button>
                        
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Edit