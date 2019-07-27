const initialState = []

export default function user(state = initialState, action)
 {

    switch (action.type) {
      
      case 'OnPageLoad':
      console.log('L-4-switch', action.payload)

        return action.payload;
      default:
        return state;
    }
  }