import {createSlice} from "@reduxjs/toolkit"

const currentVote = {id: "v1", token: "sammy", isAdmin: true}
const initialState = {selectedVoteCandidate: "", currentVote, selectedElection: "", idOfElectionToUpdate: "", addCandidateElectionId: ""}

const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
        changeSelectedVoteCandidate(state, action){
            state.selectedVoteCandidate = action.payload;
        },

        changeSelectedElections(state, action){
            state.selectedElection = action.payload;
        },
        changeIdOfCandidateElectionId(state, action){
            state.addCandidateElectionId = action.payload;
        },
            changeAddCandidateElectionId(state, action){
                state.addCandidateElectionId = action.payload;
            }
    }
})


export const voteAction = voteSlice.actions

export default voteSlice