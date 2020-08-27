import React, {Component} from 'react';
import {Button,Container,ListGroup,ListGroupItem} from 'reactstrap';

import {connect} from "react-redux";
import {getItems} from "../actions/itemActions";
import axios from "axios";

class ShoppingList extends Component {
    state={

    }
    componentDidMount() {
        this.props.getItems()
    }

    // deleteItem=(id)=>{
    //     axios.post('/api/items/delete/', id)
    //     this.props.getItems()
    //
    // };

    render() {
        const {items}=this.props;
        return (
            <Container>
                <h1>ID:{this.props.id}</h1>
                 <ListGroup>
                        {items.map(item=><ListGroupItem key={item._id} >
                            <p>{item.name}&nbsp;</p>
                            {/*<Button color="danger" size="sm" onClick={()=>this.deleteItem(item._id)}>&times;</Button></p>*/}
                        </ListGroupItem>)}
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = state =>{
    return{
        items: state.item.items,
        id: state.item.id,
    }
};



export default connect(mapStateToProps,{getItems})(ShoppingList);