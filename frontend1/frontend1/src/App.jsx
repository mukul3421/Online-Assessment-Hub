import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import StudentDashboard from './components/StudentDashboard';
import FieldList from './components/GeneralApti/FieldList';
import PaperList from './components/GeneralApti/PaperList';
import TestInstructions from './components/GeneralApti/TestInstructions';
import TestPage from './components/GeneralApti/TestPage';
import ResultsPage from './components/GeneralApti/ResultPage';
import HrInterview from './components/HrInterview';
import PlacementUpdates from './components/PlacementUpdates';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { useAuth } from './AuthContext';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GeneralAptitude" element={<FieldList />} />
          <Route path="/Interview" element={<HrInterview />} />
          <Route path="/PlacementUpdates" element={<PlacementUpdates />} />
          <Route path="/:fieldname" element={<PaperList />} />
          <Route path="/:fieldname/:papername/instructions" element={<TestInstructions />} />
          <Route path="/:fieldname/:papername/test" element={<TestPage />} />
          <Route path="/:fieldname/:papername/results" element={<ResultsPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
