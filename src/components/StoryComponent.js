import React from "react";
import {Link} from "react-router-dom"

class StoryComponent extends React.Component {
    render(){
        
        return (
            <>
                {
                <section>
                    <div className="container py-3 px-0">
                        <div className="card">
                        <div className="row">
                            <div className="col-md-3 pl-3">
                                <img src="https://picsum.photos/230/230" className="w-200 post-img" alt={this.props.story.title} />
                            </div>
                            <div className="col-md-9">
                                <div className="card-block px-3">
                                <h4 className="card-title mt-4"><Link id={this.props.story.id} to={`/stories/${this.props.story.id}`}>{this.props.story.title}</Link></h4>
                                <p className="card-text">{this.props.story.body.substring(0, 110)}...</p>
                                <p className="meta">
                                <i className="ion-md-calendar"></i>&nbsp;{this.props.story.created_at}&nbsp;&nbsp;
                                    <i className="ion-md-person"></i>&nbsp;&nbsp;
                                    {this.props.story.user.name}&nbsp;&nbsp; 
                                    <i className="ion-md-chatboxes"></i> 25
                                    </p>
                                <Link className="btn btn-primary float-right mr-3 mb-5" id={this.props.story.id}  to={`/stories/${this.props.story.id}`}>Read more...</Link>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </>
        );
    }
}

export default StoryComponent;