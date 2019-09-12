import React from "react"
import {Link} from "react-router-dom"

class New extends React.Component {

    constructor(){
        super()
        this.state = {
            body: '',
            title: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
      }
    
      handleBodyChange = (event) => {
        this.setState({body: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        const newTitle = this.state.title;
        const newBody = this.state.body;

        event.preventDefault();
        fetch('http://localhost:3000/stories/',{
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify({
                title: newTitle, 
                body: newBody,
                user_id: 1
            })
        })
    }

    render(){
        return (
            <section>
                <div className="container py-3 px-0 pl-0">
                    <div className="card p-5">
                        <h1>Writing new post</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className={"form-control mb-3"} name="title" defaultValue={""} onChange={this.handleTitleChange} type="text"/>
                            <textarea className={"form-control bigfield"} name="body" defaultValue={""} onChange={this.handleBodyChange} rows="15" type="textarea"/>
                            <Link to={""} onClick={() => this.props.history.goBack()} className={"btn btn-danger mt-3"} type="submit">Cancel</Link>
                            <button className={"btn btn-primary mt-3 float-right"} type="submit">Save changes</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default New;