const initialState = {
  people: [],
  person: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GETAPI":
      return { ...state, people: payload };
    case "SELECTPERSON":
      console.log(payload.person, "payload.person Y0");
      return { ...state, person: payload.person };

    default:
      return state;
  }
};
