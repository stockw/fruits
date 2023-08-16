const React = require('react');

class Show extends React.Component {
    render () {
        const fruit = this.props.fruit
        return (
            <div>
            <h1>Fruits Page</h1>
                The {fruit.name} is {fruit.color}
                {fruit.readyToEat? 'It is good to eat' : 'Nope it is not ready yet'}
            </div>
        );
    }
}
module.exports = Show;