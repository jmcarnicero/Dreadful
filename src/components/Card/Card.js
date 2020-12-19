import React, { useState } from "react";
import { Column } from "carbon-components-react";
import './Card.scss'

export default function Card({ data }) {

    const [show, setShow] = useState(false)

    const handleOnMouseOver = () => {
        setShow(true)
    }

    const handleOnMouseLeave = () => {
        setShow(false)
    }

    return (
        <>
            <Column className="card " sm={4} md={2} lg={3} xlg={3} >
                <span onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} >
                    <img src={data.images["Poster Art"].url} className="car-img " alt={data.title}  ></img>

                    {!show && <div className="card-block-title">
                        <span className="card-title">{data.title}</span>
                    </div>}

                    {show && <div className="card-block-description">
                        <span className="card-block-description-title ">{data.title}</span>
                        <span className="card-block-description-release ">{data.releaseYear} </span>
                        <span className="card-block-description-description ">{data.description} </span>
                    </div>}
                </span>
            </Column>
        </>
    );
}
