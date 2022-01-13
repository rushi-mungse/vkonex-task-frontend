import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import { setAndGetFile } from "../../http";
import {useHistory} from 'react-router-dom'

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const [doc, setDoc] = useState("");
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState();
  const fileCapture = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setDoc(reader.result);
    };
  };
  console.log(doc);
  const submit = async () => {
    if (!doc) {
      return alert("Please select content");
    }
    const { data } = await setAndGetFile({
      files: doc,
      OriginalFileName: fileName,
      email: user.email,
    });
    setData(data);
  };
const history=useHistory();
  const goToAdminPanel = () => {
    history.push('/all-users')
  };

  return (
    <div className={styles.dashboardWrap}>
      <div className={styles.dashboardPanel}>
        <div>
          {user && <h1>Hello {user.name}</h1>}
          {!user && <h1>Hello</h1>}
        </div>
        <div>
          {user?.role === "admin" && (
            <button onClick={goToAdminPanel}>All Users</button>
          )}
        </div>
      </div>
      <div className={styles.tableWrap}>
        <div className={styles.tableArr}>
          <table>
            <tbody>
              <tr>
                <th>sr no</th>
                <th>File Name</th>
                <th>Formate</th>
              </tr>
              {data && (
                <tr>
                  <td>1</td>
                  <td>{data.userFiles.OriginalFileName}</td>
                  <td>
                    <a
                      href={`http://localhost:5500${data.userFiles.files}`} target="_blank"
                    >Link</a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.uploadFile}>
          <label htmlFor="fileSy">Upload new content</label>
          <input
            type="file"
            id="fileSy"
            placeholder="Upload new content"
            onChange={fileCapture}
          />
        </div>
        <div className={styles.submit}>
          <span onClick={submit}>Submit</span>
        </div>
      </div>
      <p className={styles.note}>Note :- Please upload pdf file only.</p>
    </div>
  );
};

export default Dashboard;
