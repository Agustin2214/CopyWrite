const { POST_IECHO } = require("../actions/actions");


const initialState = {
    text:[],
    textAcc:[]  
      };
      
      const rootReducer = (state = initialState, action) => {
        switch (action.type) {

            case POST_IECHO:
            
                return {
                   
                  ...state,
                  text: action.payload,
                  textAcc: [action.payload,...state.textAcc]
                };

            default:
                return { ...state };
        }
    }

    export default rootReducer;