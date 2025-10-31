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
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
import ManageGroups from "./pages/admin/ManageGroups.jsx";
import Reports from "./pages/admin/Reports.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/create-group" element={<CreateGroupPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/my-study-groups" element={<MyStudyGroupsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/policies" element={<PoliciesPage />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-groups" element={<ManageGroups />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
