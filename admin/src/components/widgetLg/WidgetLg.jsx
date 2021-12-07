import React from "react";
import "./WidgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
      <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Aug 2021</td>
          <td className="widgetLgAmount">₹122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Aug 2021</td>
          <td className="widgetLgAmount">₹122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Aug 2021</td>
          <td className="widgetLgAmount">₹122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Aug 2021</td>
          <td className="widgetLgAmount">₹122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
