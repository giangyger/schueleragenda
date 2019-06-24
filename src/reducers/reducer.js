const initialState = {
  data: {
    "24.6.2019": [
      { className: "D", info: "S.144 lesen", id: "sd" },
      { className: "E", info: "S.14 lesen", id: "sds" },
      { className: "F", info: "S.11 lesen", id: "sds3" }
    ]
  },
  settings: { premium: false }
};

//Loop durch initial state und mit gespeichertem vergleichen
//Wenn property von init nicht in asyncstorage vorhanden ist, übergeben

//ROUTES
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newState = Object.assign(state);
      const { date, className, info, test } = action.payload;
      if (newState.data[date] == undefined) {
        newState.data[date] = [{ className, info, test }];
      } else {
        newState.data[date].push({ className, info, test });
      }
      return newState;
    default:
      return state;
  }
};

//HELPERS

//Structure
/*

data: {

}



*/
