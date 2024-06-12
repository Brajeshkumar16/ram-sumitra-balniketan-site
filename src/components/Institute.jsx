import React, { useState } from 'react'
import teacher from '../assets/teacher'
import Card from './Card';

export const Institute = () => {
    const [data, setData] = useState(teacher);
    return (
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>{data.map((teach, index) => (
            <div key={index} style={{ width: "400px" }}>
                {/* <div>{teach.name}</div>
                <div>{teach.name}</div> */}
                <Card
                    name={teach.name}
                    img={teach.img}
                    email={teach.email}
                    phone={teach.phone}
                    degination={teach.degination}
                    experience={teach.experience}
                />
            </div>

        ))}
        </div>
    )
}