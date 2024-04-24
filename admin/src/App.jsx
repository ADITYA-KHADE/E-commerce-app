import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import Adminpage from "./adminpages/admin/admin.jsx";
import Footer from "./components/footer/footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Adminpage />
      <Footer />
    </div>
  )
}

export default App
