import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mt-5 mb-5">
          <div className="card-body">
            <Weather />
          </div>
        </div>
      </div>
    </div>
  )
}
