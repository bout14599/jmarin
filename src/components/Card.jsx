import React from "react";

export default function Card(params) {
    return (
        <div className="card">
            <h1>
                {params.title}
            </h1>
            <img src={params.img}>
            </img>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae ducimus rerum pariatur dolorum perspiciatis impedit autem repellendus delectus aut, nemo, deleniti perferendis facilis laboriosam nihil atque officia qui et?
            </p>
        </div>
    )
}