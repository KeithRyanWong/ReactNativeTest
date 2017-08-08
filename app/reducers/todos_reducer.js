
const todos_reducer =  (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    default:
      return state;
  }
};

export default todos_reducer;