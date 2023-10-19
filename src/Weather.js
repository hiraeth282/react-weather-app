import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
  
            <form>
              <div className="row">
                <div className="col-sm-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                  />
                </div>
                <div className="col-sm-3">
                  <input type="submit" value="Search" className="btn btn-dark" />
                </div>
              </div>
            </form>
    </div>
  );
}
