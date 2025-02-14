import Thumbnail1 from './assets/flag1.jpg';
import Thumbnail2 from './assets/flag2.jpg';
import Thumbnail3 from './assets/flag3.png';
import Candidate1 from './assets/candidate1.jpg';
import Candidate2 from './assets/candidate2.jpg';
import Candidate3 from './assets/candidate3.jpg';
import Candidate4 from './assets/candidate4.jpg';
import Candidate5 from './assets/candidate5.jpg'; // Corrected: Consistent naming
import Candidate6 from './assets/candidate6.jpg'; // Corrected: Consistent naming
import Candidate7 from './assets/candidate7.jpg';

export const elections = [
  {
    id: "el", // Corrected: String quotes for ID
    title: "Harvard Presidential Elections 2024",
    description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.", // Corrected: Removed extra line break and corrected spelling
    thumbnail: Thumbnail1, // Corrected: Consistent naming
    candidates: ["c1", "c2", "c3", "c4"], // Corrected: String quotes for array elements
    voters: []
  },
  {
    id: "e2",
    title: "Legon SRC Presidential Elections 2024",
    description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    thumbnail: Thumbnail2,
    candidates: ["c5", "c6", "c7"],
    voters: []
  },
  {
    id: "e3",
    title: "Stanford Presidential Elections 2024",
    description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid",
    thumbnail: Thumbnail3,
    candidates: [],
    voters: []
  }

]; // Corrected: Closing square bracket for the array



export const candidates = [
    {
      id: "c1",
      fullName: "Enoch Ganyo",
      image: Candidate1,
      motto: "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      voteCount: 23,
      election: "e2",
    },
    {
      id: "c2",
      fullName: "John Asiama",
      image: Candidate2,
      motto: "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      voteCount: 18,
      election: "e2",
    },
    {
      id: "c3",
      fullName: "Candidate 3 Name", // Fill in the name
      image: Candidate3,
      motto: "Candidate 3 Motto", // Fill in the motto
      voteCount: 0, // Initial vote count
      election: "e2",
    },
    {
      id: "c4",
      fullName: "Candidate 4 Name", // Fill in the name
      image: Candidate4,
      motto: "Candidate 4 Motto", // Fill in the motto
      voteCount: 3, // Initial vote count
      election: "e2",
    },
    {
      id: "c5",
      fullName: "Candidate 5 Name", // Fill in the name
      image: Candidate5,
      motto: "Candidate 5 Motto", // Fill in the motto
      voteCount: 5, // Initial vote count
      election: "el",
    },
    {
      id: "c6",
      fullName: "Candidate 6 Name", // Fill in the name
      image: Candidate6,
      motto: "Candidate 6 Motto", // Fill in the motto
      voteCount: 2, // Initial vote count
      election: "e3",
    },
    {
      id: "c7",
      fullName: "Candidate 7 Name", // Fill in the name
      image: Candidate7,
      motto: "Candidate 7 Motto", // Fill in the motto
      voteCount: 3, // Initial vote count
      election: "e2",
    },
  ];



  export const voters = [
    {
      id: "v1",
      fullName: "Ernest Achiever",
      email: "achiever@gmail.com",
      password: "achiever123",
      isAdmin: true,
      votedElections: ["e2"] // Corrected: Array of strings
    },
    {
      id: "v2",
      fullName: "Doris Lartey",
      email: "doris@gmail.com",
      password: "doris123",
      isAdmin: false,
      votedElections: ["e2"] // Corrected: Array of strings
    },
    {
      id: "v3",
      fullName: "Daniel Vinyo",
      email: "daniel@gmail.com",
      password: "daniel123",
      isAdmin: false, // Added isAdmin property
      votedElections: ["el", "e2"] // Corrected: Array of strings
    },
      {
      id: "v4",
      fullName: "Voter 4", // Placeholder name
      email: "voter4@example.com", // Placeholder email
      password: "password4", // Placeholder password
      isAdmin: false,
      votedElections: ["el"] // Corrected: Array of strings
    },
    {
      id: "v5",
      fullName: "Voter 5", // Placeholder name
      email: "voter5@example.com", // Placeholder email
      password: "password5", // Placeholder password
      isAdmin: false,
      votedElections: ["el", "e2"]
    }
  ];