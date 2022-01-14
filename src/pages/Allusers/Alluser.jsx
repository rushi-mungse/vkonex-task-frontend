import React, { useState } from "react";
import { useEffect } from "react";
import { allClients } from "../../http";
import styles from "./Alluser.module.css";
const Alluser = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await allClients();
        setRooms(data.userWithFile);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>ALl users</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <table>
          <tbody>
            <tr>
              <th>User Name</th>
              <th>File Name</th>
              <th>File</th>
            </tr>
            {rooms.map((client) => {
              return (
                <tr key={client._id}>
                  <td className={styles.name}>{client.name}</td>
                  <td>{client.OriginalFileName}</td>
                  <td>
                    <a
                      href={`http://localhost:5500${client.files}`}
                      target="_blank" rel="noreferrer"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
