import React from "react";
import { useParams } from "react-router-dom"
import {candidates} from "../data"
import {elections} from "../data"
import { useDispatch, useSelector } from "react-redux";

import {voters} from "../data"
import {IoAddOutline} from "react-icons/io5"

import ElectionCandidate from "../components/ElectionCandidate";
import { uiAction } from "../store/ui-slice";
import AddCandidateModal from "../components/AddCandidateModal";


const ElectionDetails = () => {
  const {id} = useParams()
const dispatch = useDispatch()
  const currentElection = elections.find(election => election.id == id)
  const electionCandidates = candidates.filter(candidate => candidate.election == id)

  const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing)


  const openModal = () => {
    dispatch(uiAction.openAddCandidateModal())
  }
  return (
  <>
   <section className="electionDetails">
    <div className="container electionDetails_container">
      <h2>{currentElection.title}</h2>
      <p>{currentElection.description}</p>
      <div className="electionDetails_image">
        <img src={currentElection.thumbnail} alt={currentElection.title} />
      </div>

      <menu className="electionDetails_candidates">
        {
          electionCandidates.map(candidate => <ElectionCandidate key={candidate.id} {...candidate} />)
        }
        <button className="add_candidate-btn" onClick={openModal}>
        <IoAddOutline />
      </button>
      </menu>
      
        <article className="voters">
          <h2>Voters</h2>
          <table className="voters_table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
          {
            voters.map(voter =>
              <tr key={voter.id}>
            <td><h5>{voter.fullName}</h5></td>
            <td>{voter.email}</td>
            <td>14:43:55</td>
          </tr>
            )
          }
            </tbody>
          </table>
        </article>
    </div>
   </section>
   {addCandidateModalShowing &&
   <AddCandidateModal />
   
   }
  </>
  )
};

export default ElectionDetails;
