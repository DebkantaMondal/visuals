import React from 'react'

import './MainCard.css';
import Card from 'react-bootstrap/Card';

import Carousell from './Carousell';

export default function MainCard(props) {

    return (<div>
        <Card className="mainCard" >
            <Carousell baseMedia={props.baseMedia} />
        {/*<Card.Img variant="top" src={image1} className="mainCardPhoto" />
            <Card.Body>
                <div className="titleWrapper"></div>



    </Card.Body>*/}
        </Card>
    </div>)
}