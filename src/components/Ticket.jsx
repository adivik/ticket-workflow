import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import http from "../httpCommon";

function Ticket(props) {
  const [data, setData] = useState({});
  const [value, setValue] = useState();
  const { TicketId } = useParams();
  useEffect(() => {
    http
      .get(`/tickets/${TicketId}`)
      .then((d) => {
        setData(d.data);
        setValue(d.data.state);
        console.log(d.data.state);
        console.log(d.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    console.log(value + " :prev value");
    console.log(e.target.value + " :target value");
    setValue(e.target.value);
    http
      .put(`/tickets/${TicketId}`, {
        state: e.target.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <div className="ticket-box">Ticket {data.number}</div>
      <br />
      <select value={value} onChange={handleChange}>
        <option value="1">Open</option>
        <option value="2">In progress</option>
        <option value="3">Code review</option>
      </select>
    </div>
  );
}

export default Ticket;
