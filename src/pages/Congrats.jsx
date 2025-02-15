import React from "react";
import {Link} from "react-router-dom"
const Congrats = () => {
  return (
    <section className="congrats">
      <div className="container congrats_container">
        <h2>Thanks for your vote!</h2>
        <p>Your vote is now addes to your candidate's vote count. You will be redirected shortly to see the new result.</p>
        <Link to="/results" className="btn sm primary">See Results</Link>
      </div>
      </section>
  )
};

export default Congrats;
