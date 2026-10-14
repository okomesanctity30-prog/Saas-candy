import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ErrorPage from "./Pages/ErrorPage";

function MainLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page Without Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Page Without Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
