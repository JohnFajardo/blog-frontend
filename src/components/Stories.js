import React from "react"
import StoryComponent from "./StoryComponent";

class Stories extends React.Component {

    stories = () => (this.props.stories.map(story => <StoryComponent story={story} key={story.id} />));
    
    render() {
        return (
            <>
                {this.stories()}
            </>
        );
    }
}

export default Stories;