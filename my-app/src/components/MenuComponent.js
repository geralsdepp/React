import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }    

    onDishSelect(dish){
        this.setState({ selectedDish : dish})
    }

    renderDish(dish){
        if (dish != null) {            
            return(<Dishdetail selectedDish={dish} />);
        }else{
            return (<div></div>);
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>                    
                        <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>                            
                        </CardImgOverlay>
                    </Card>
              </div>
            );
        });

        console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">                
                    {menu}               
                </div>                          
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}

export default Menu;