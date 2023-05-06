import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Home</span>
              </li>
            </Link>
            <Link to="/deviceStg">
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Device Setting</span>
              </li>
            </Link>
            <Link to="/wlanStg">
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Wireless Setting</span>
              </li>
            </Link>
            <Link to="/otherStg">
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Other Setting</span>
              </li>
            </Link>
          </ul>
          <hr className='sidebarHr'/>
        </div>
    </div>
  )
}
