import React from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/ui-slice";
import { voteAction } from "../store/vote-slice";
const Candidate = ({image, id, fullName, motto}) => {
  const dispatch = useDispatch()
  const openCandidateModal = () => {
      dispatch(uiAction.openVoteCandidateModal())
      dispatch(voteAction.changeSelectedVoteCandidate(id))
  }
  return(
    <article className="candidate">
        <div className="candidate_image">
            <img src={image} alt={fullName} />
        </div>
        <h5>
            {fullName?.length > 20 ? fullName.substring(0, 20) + "..." : fullName}
        </h5>
        <small>{motto?.length > 25 ? motto.substring(0, 25) + "..." : motto}</small>
        <button className="btn primary" onClick={openCandidateModal}>Vote</button>
    </article>
  )
};

export default Candidate;
