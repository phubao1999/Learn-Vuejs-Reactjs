'use strict';

const e = React.createElement;

class likeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render(){
        if (this.state.liked){
            return 'You Like It';
        }
        return e(
            'button',
            {onClick: () => this.setState({liked: true})},
            'like'
        )
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(likeButton), domContainer);


