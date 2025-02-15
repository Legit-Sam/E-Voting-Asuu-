import React from "react";
import { candidates as dummyCandidates } from "../data";
import { useParams } from "react-router-dom"
import Candidate from "../components/Candidate";
import ConfirmVote from "../components/ConfirmVote";
import {useSelector} from "react-redux"
const Candidates = () => {
  const {id} = useParams()
  const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)

  const candidatesElect = dummyCandidates.filter(candidate => 
     candidate.election === id
  )
  return (
    <>
    <section className="candidates">
      <header className="candidates_header">
      <h1>Vote Your Candidate</h1>
      <p>These are the candidates for the selected elections. Plase vote once and wisely, because you wont be allowed to vote in this election- again.</p>
      </header>

      <div className="container candidates_container">

      {
    candidatesElect.map(candidate => <Candidate key={candidate.id} {...candidate} />)
}
      </div>
    </section>
    {voteCandidateModalShowing && <ConfirmVote />}
    </>
  )
};

export default Candidates;
