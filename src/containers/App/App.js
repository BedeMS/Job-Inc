import JobListings from "../JobListings/JobListings";
import Home from "../Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(far, faBookmark);

function App() {
  return <Home />;
}

export default App;
