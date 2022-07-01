import React from "react";
import { IoLocationOutline } from "react-icons/io5";



export default function Card(props: {
    title: string,
    location: string,
    googleMapsUrl: string,
    startDate: string,
    endDate: string,
    description: string,
    imageUrl: string
}) {
    return (
        <div style={{
            whiteSpace: "nowrap",
            display: "flex",
            flexDirection: "row",
            verticalAlign: "top",
            paddingLeft: "30rem",
            paddingBottom: "3rem",
            paddingTop: "5rem",
            marginTop: "0",
        }}>
            <img src={props.imageUrl} style={{
                width: "250px",
                height: "376px",
                left: "80px",
                top: "200px",
                objectFit: "cover",
                borderRadius: "1rem",
            }} alt="" />
            <div style={{
                margin: "1rem",
                width: "100%",
                paddingTop: "3rem",
            }}>
                <div style={{
                    display: "inline-flex",
                    flexDirection: "row",
                }}>
                    <IoLocationOutline style={{
                        position: "relative",
                        top: "0px",
                        left: "0px",
                        width: "24px",
                        height: "24px",
                        display: "inline",
                    }} size={28} />
                    <p style={{
                        fontWeight: "800",
                        fontFamily: "Inter",
                        padding: "0",
                        margin: "0",
                        paddingRight: "15px",
                    }}>{props.location}</p>
                    <a style={{
                        color: "#918E9B",
                        textDecoration: "underline",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }} href={props.googleMapsUrl}>View Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    display: "flex",
                    flexDirection: "row",
                }}>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}