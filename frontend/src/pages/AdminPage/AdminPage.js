import React from "react";
import './admin.css'
import AdminBurgerMenu from "./components/AdminBurgerMenu";
import AddFormAdmin from "./components/AddFormAdmin";

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
       <AddFormAdmin/>
      </main>
      <footer className="footer_admin_block">
        <div></div>
      </footer>
    </div>
    )
}

export default AdminPage;