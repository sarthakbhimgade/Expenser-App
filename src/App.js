import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/add-expense" Component={AddExpense} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
