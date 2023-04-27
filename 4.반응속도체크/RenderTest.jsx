import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [{inside: [3] }],
    };

    onClick = () => {
        this.setState({
            object: {...this.state.object},
        });
    };

    render() {
        console.log('랜더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default Test;