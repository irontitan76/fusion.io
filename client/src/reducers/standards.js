const initialState = {
  currentItem: {},
  items: [],
};

const standards = (state = initialState, action) => {
  switch (action.type) {
  case 'STANDARD_CHANGE': {
    const { currentItem } = state;
    const { name, value } = action.payload;

    if (name === 'content') {
      const newItem = { ...currentItem, content: { body: value, type: 'md' } };
      return { ...state, currentItem: newItem };
    }

    if (name === 'parentId') {
      const parentId = value;
      const siblingId = value === currentItem.parentId ? currentItem.siblingId : null;
      const newItem = { ...currentItem, parentId, siblingId };
      return { ...state, currentItem: newItem };
    }

    const newItem = { ...currentItem, [name]: value };
    return { ...state, currentItem: newItem };
  }
  case 'STANDARD_LOAD': {
    const { item } = action.payload;
    return { ...state, currentItem: item || {} };
  }
  case 'STANDARD_REMOVE':
    return state;
  case 'STANDARD_UPDATE':
    return state;
  case 'STANDARD_UNLOAD': {
    const { currentItem } = initialState;
    return { ...state, currentItem };
  }
  case 'STANDARDS_LOAD': {
    const { items } = action.payload;
    return { ...state, items };
  }
  case 'STANDARDS_UNLOAD': {
    const { items } = initialState;
    return { ...state, items };
  }
  default:
    return state;
  }
};

export default standards;