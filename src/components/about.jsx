import React from "react";

export const About = (props) => {
  const { data } = props;

  // Ensure that 'data' and its properties are available before trying to map
  const why = Array.isArray(data?.Why) ? data.Why : [];
  const why2 = Array.isArray(data?.Why2) ? data.Why2 : [];

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              {/* <p>{data ? data.paragraph : "loading..."}</p> */}
              <h3>Why Choose Our Background Verification?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {why.length > 0
                      ? why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading..."}
                  </ul>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {why2.length > 0
                      ? why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading..."}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
