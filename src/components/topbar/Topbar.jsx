import "./topbar.css"
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
// import { Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      {/* top left bar */}
        <div className="topbarLeft"> 
          <span className="logo">MelvinSocial</span>
        </div>
        {/* top center bar */}
        <div className="topbarCenter"> </div>
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        {/* top right bar */}
        <div className="topbarRight">
          <span className="topbarLink">Homepage </span>  
          <span className="topbarLink">Timeline </span>  
        </div>
        <div className="topbarIcons">   
            <div className="topbarIconItem">
                <Person />
                <span className="topIconBadge"> 1</span>
            </div>
            <div className="topbarIconItem">
                <Chat />
                <span className="topIconBadge"> 2</span>
            </div>
            <div className="topbarIconItem">
                <Notifications />
                <span className="topIconBadge"> 3</span>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>



    </div>
  )
}
