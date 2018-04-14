const riderStatsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_RIDER_STATS':
    return action.riderStats;
  case 'CLEAR_RIDER_STATS':
    return {};
  default:
    return state;
  }
};

export default riderStatsReducer;