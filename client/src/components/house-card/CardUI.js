import React, { useState } from 'react';
import "./card-style.css"

import { useDispatch, useSelector } from 'react-redux';
import { reserveHouseAction, cancelReserveHouseAction } from "../../redux-actions/guest-house.actions";
import { selectReservedHouses } from "../../redux-selectors/guest-house.selectors";

import { Button } from "react-bootstrap";
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';

import { selectAuthInformation } from '../../redux-selectors/auth.selector';

export const Card = (props) => {
    console.log('props', props);
    
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [selectedHouse, setselectedHouse] = useState(null);
    const authInfo = useSelector(selectAuthInformation);
    const reservation = useSelector(selectReservedHouses)
    const handleClose = () => setShow(false);
    const handleShow = (house) => {
        if (authInfo.isAuthenticated) {
            setselectedHouse(house)
            setShow(true)
        }else{
            props.history.push('/login')
        }

    };

    const footer = (
        <div>
            <Button variant="secondary" onClick={handleClose}> Annuler </Button>
            <Button variant="primary" disabled={selectedHouse && !selectedHouse.reserveDate}
                onClick={() => {
                    dispatch(reserveHouseAction(selectedHouse));
                    setselectedHouse(null);
                    handleClose();
                }}> Sauvegarder </Button>
        </div>
    );

    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.house.image} alt="House" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> {props.house.name} </h4>
                <h5 className="card-title"> {props.house.region} </h5>
                <p className="card-text text-secondary">
                    {props.house.description}
                </p>
                {
                    reservation.find(h => h._id === props.house._id) ?
                        <Button variant="warning" onClick={() => dispatch(cancelReserveHouseAction(props.house._id))}>Annuler la reservation</Button>
                        :
                        <Button variant="primary" onClick={() => handleShow(props.house)}>Reserver</Button>

                }
                {props.house.reserveDate ? (<p className="card-text text-secondary">
                    {props.house.reserveDate.toString()}
                </p>) : ''}
            </div>
            <Dialog header={selectedHouse ? selectedHouse.name : ""} footer={footer} visible={show} modal={true} show={show} onHide={handleClose}>
                <div className="container-fluid">
                    <div className="row">Date de reservation :</div>
                    <div className="row"><Calendar appendTo={document.body} onChange={date => setselectedHouse({ ...selectedHouse, reserveDate: date.value })} /></div>
                </div>
            </Dialog>
        </div>
    );
}

export default Card;