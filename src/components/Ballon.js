import React from "react";
import "../styles/components/ballon.scss";
export default function Ballon(props) {
    return (
        <div className="ballon">
            {props.data.type === "user" ? (
                <div className="user">
                    <p>{props.data.text}</p>
                </div>
            ) : (
                    props.data.text.map((e,i) => (
                        <div key={i} className="bot">
                            <p>{e.text}</p>
                        </div>
                    ))

                )}
        </div>
    );
}
