import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutComponent,
  ChatComponent,
  CoinectionsComponent,
  HomeComponent,
  LoginComponent,
  ProfileComponent,
  SettingsComponent,
  YourCoinsComponent
} from './components';

function App() {
  return (<div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="profile" element={<ProfileComponent />} />
        <Route path="settings" element={<SettingsComponent />} />
        <Route path="yourcoins" element={<YourCoinsComponent />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="coinections" element={<CoinectionsComponent />} />
        <Route path="chat" element={<ChatComponent />} />
        <Route path="about" element={<AboutComponent />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
