import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrap}>
      <h1>Hello Rushikesh</h1>
      <div className={styles.tableWrap}>
        <div className={styles.tableArr}>
          <table>
            <tbody>
              <tr>
                <th>sr no</th>
                <th>File Name</th>
                <th>Formate</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Wildlifr</td>
                <td>doc</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Medical</td>
                <td>QA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.uploadFile}>
        <label htmlFor="fileSy">Upload new content</label>
        <input type="file" id="fileSy" placeholder="Upload new content" />
      </div>
    </div>
  );
};

export default Dashboard;
