import React from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    static propTypes = {
        addPlayer: PropTypes.func.isRequired,
    };

    addPlayer = (event) => {
        event.preventDefault();
        this.props.addPlayer(this.state.name);
        this.setState({
            name: ""
        })
    };

    onChangeName = (event) => {
        const name = event.target.value;
        this.setState({
            name: name
        });
    };

    render() {
        return (
            <div className="add-player-form" onSubmit={this.addPlayer}>
                <form>
                    <input type="text" value={this.state.name} onChange={this.onChangeName}/>
                    <input type="submit" value="Add Player"/>
                </form>
            </div>
        )
    }
}


export default AddPlayerForm