import react, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    renderDish() {
        const dish = this.props.selectedDish;

        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments() {
        const dish = this.props.selectedDish;

        if (dish != null) {
            const coms = dish.comments.map((com) => {
                return (
                    <ul key={com.id} className="list-unstyled">
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            -- {com.author}, {com.date }
                        </li>
                    </ul>
                );
            });

            return (
                <div className="p-3">
                    <h4>Comments</h4>
                    {coms}
                </div>
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-5 m-1">
                    {this.renderDish()}
                </div>
                <div className="col-sm-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}

export default DishDetail