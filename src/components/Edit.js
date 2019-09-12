import React from "react"
import {Link} from "react-router-dom"


class Edit extends React.Component {

    constructor(){
        super()
        this.state = {
            story: [],
            body: '',
            title: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const storyId = this.props.match.params.id;
        fetch(`http://localhost:3000/stories/${storyId}`)
        .then(response => response.json())
        .then(story => this.setState({story}));
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
      }
    
      handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
      }

    handleSubmit(event) {
        event.preventDefault();
        const newTitle = this.state.title;
        const newBody = this.state.body;
        const theId = this.state.story.id
        event.preventDefault();
        fetch(`http://localhost:3000/stories/${theId}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify({
                title: newTitle, 
                body: newBody
            })
        })
    }

    render(){
        return(
            <section>
                <div className="container py-3 px-0 pl-0">
                    <div className="card p-5">
                        <h1>Editing post</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className={"form-control mb-3"} name="title" defaultValue={this.state.story.title} onChange={this.handleTitleChange} type="text"/>
                            <textarea className={"form-control"} name="body" defaultValue={this.state.story.body} onChange={this.handleBodyChange} />
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