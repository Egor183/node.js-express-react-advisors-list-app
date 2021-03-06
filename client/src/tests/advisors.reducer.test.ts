import { loadAdvisors } from "redux/actions/advisors.actions";
import { advisorsReducer } from "redux/reducers/advisors.reducer";

const state = {
  advisorsList: [],
  currentAdvisorsList: [],
};

it("length of advisorsList should be incremented ", () => {
  const action = loadAdvisors([
    {
      id: "2",
      name: "Bob",
      reviews: 141,
      status: "online",
      image: "",
      languages: ["English", "German"],
    },
    {
      id: "3",
      name: "Patrick",
      reviews: 329,
      status: "offline",
      image: "",
      languages: ["Spanish", "France"],
    },
  ]);

  const newState = advisorsReducer(state, action);

  expect(newState.advisorsList.length).toBe(2);
});
