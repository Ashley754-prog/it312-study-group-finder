import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import InboxPage from "./pages/InboxPage";
import CreateGroupPage from "./pages/CreateGroupPage.jsx";
import SchedulesPage from "./pages/SchedulesPage.jsx";
import MyStudyGroupsPage from "./pages/MyStudyGroupsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import TermsPage from "./pages/TermsPage";
import PoliciesPage from "./pages/PoliciesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/create-group" element={<CreateGroupPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/my-study-groups" element={<MyStudyGroupsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
