const React = require('react');

const Index =(props) => {
    const { fruits } = props;
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li>
                                The {''}
                                <a href={`/fruits/${i}`}>
                                    {fruit.name}
                                </a>{''}
                                is {fruit.color} <br></br>
                                {fruit.readyToEat?
                                `It is ready to eat` : `Nope it is not ready`}
                                <br />
                            </li>
                        );
                    })};
                </ul>
                
            </div>
        );
    }

module.exports = Index;