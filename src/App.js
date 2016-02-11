import React from 'react';
import ContactsList from './ContactsList';


let contacts = [{
    id: 1,
    name: 'Scott',
    phone: '555 333 1111'
}, {
    id: 2,
    name: 'Dude',
    phone: '555 333 2222'
}, {
    id: 3,
    name: 'Paul',
    phone: '555 333 8888'
}, {
    id: 4,
    name: 'Mike',
    phone: '555 333 2321'
}];

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

React.render(<App contacts={contacts}/>, document.getElementById('app'));
