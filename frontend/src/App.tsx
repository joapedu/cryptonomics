import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutComponent,
  LoginComponent,
  MainComponent,
  ProfileComponent,
  SettingsComponent,
} from './components';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="profile" element={<ProfileComponent />} />
        <Route path="settings" element={<SettingsComponent />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="about" element={<AboutComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
