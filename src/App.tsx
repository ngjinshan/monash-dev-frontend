import './App.css';
import { FlickrImageContextProvider } from './context/flickrImageContext';
import { FlickrImages } from './flickrImages';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Login } from './login';
import { LoggedInContextProvider } from './context/loggedInContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LoggedInContextProvider>
          <FlickrImageContextProvider>
            <Routes>
            <Route path="/" element={<FlickrImages/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            </Routes>
          </FlickrImageContextProvider>
        </LoggedInContextProvider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
