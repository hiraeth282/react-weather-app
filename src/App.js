import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mt-5 mb-5">
          <div className="card-body">
           <form>
             <div className="row">
               <div className="col-sm-9">
                 <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-sm-3">
                  <input type="submit" value="Search" className="btn"/>
                </div>
              </div>                
            </form>
           </div>
          </div>
        </div>
      </div>
  );
}
