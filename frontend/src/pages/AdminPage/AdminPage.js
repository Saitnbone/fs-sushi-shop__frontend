import React from "react";
import AdminBurgerMenu from "./components/AdminBurgerMenu";

const AdminPage = () =>{
  return (
    <div className="admin_block">
      <header className="admin_header_block">
        <div>
            <ul>
                <li><span><AdminBurgerMenu /></span></li>
            </ul>
        </div>
      </header>
      <main className="main_admin_block">
        <div></div>
      </main>
      <footer className="footer_admin_block">
        <div></div>
      </footer>
    </div>
    )
}

export default AdminPage;