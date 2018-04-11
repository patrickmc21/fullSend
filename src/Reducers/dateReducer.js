const dateReducer = (state = 'All', action) => {
  switch (action.type) {
  case 'CHANGE_MONTH':
    return action.month;
  default :
    return 'All';
  }
};

export default dateReducer;