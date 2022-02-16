import React from "react";
import Card from "./Card";
import card1 from "../source/undraw_ask_me_anything_re_x7pm.svg";
import card2 from "../source/undraw_certificate_re_yadi.svg";
import card3 from "../source/undraw_performance_overview_re_mqrq.svg";

export default function Card_container(params) {
    return (
        <div className="card_container">
            <Card title="Título 1" img={card1}/>
            <Card title="Título 2" img={card2}/>
            <Card title="Título 3" img={card3}/>
            </div>
    )
}