import './Topbar.css'

export default function Topbar() {
    return (
        <div className='top'>
            <div className="top-left">
                <i className="top-icon fab fa-facebook-square"></i>
                <i className="top-icon fab fa-twitter-square"></i>
                <i className="top-icon fab fa-pinterest-square"></i>
                <i className="top-icon fab fa-instagram-square"></i>
            </div>
            <div className="top-center">
                <div className="top-list">
                    <div className="toplist-item">HOME</div>
                    <div className="toplist-item">ABOUT</div>
                    <div className="toplist-item">CONTACT</div>
                    <div className="toplist-item">WRITE</div>
                    <div className="toplist-item">LOGOUT</div>
                </div>
            </div>
            <div className="top-right">
                <img className='profile-img' src="https://images.unsplash.com/photo-1641290440849-febabb311bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="profile" />
                <i className="search-icon fas fa-search"></i>
            </div>
        </div>
    )
}
