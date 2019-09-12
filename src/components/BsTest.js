import React from "react";

class BsTest extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="test-ul">
                            <li><a href="#">Test Link</a></li>
                            <li><a href="#">Test Link</a></li>
                            <li><a href="#">Test Link</a></li>
                            <li><a href="#">Test Link</a></li>
                            <li><a href="#">Test Link</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h1>Test title</h1>
                        <button className="btn btn-primary">Click me!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BsTest;