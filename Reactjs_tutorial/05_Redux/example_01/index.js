// Example to demonstrate Redux Basics

const redux = require("redux");
const createStore = redux.createStore;

// Initial state
const initialState = {
    counter: 0
};

// Reducers. Accepts 2 arguments, The current state and action
const rootReducer = (state = initialState, action) => {
    let currentState;
    if (action.type === "INC_COUNTER") { // Handling Actions
        // Always copy the old state and update it, and return the updated state.
        currentState = Object.assign({}, state);
        currentState.counter = currentState.counter + 1;
        return currentState;
    }
    if (action.type === "ADD_COUNTER") {
        currentState = Object.assign({}, state);
        currentState.counter = currentState.counter + action.value;
        return currentState;
    }
    return state;
};

// Create store
const store = createStore(rootReducer); // Accepts reducer as argument
console.log("[Initial State]", store.getState());

// Subscription
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
});

console.log("\n");
// Dispatching Action
console.log("[Dispatching action INC_COUNTER]");
store.dispatch({type: "INC_COUNTER"}); // Dispatch accepts action as arguement

console.log("\n");
console.log("[Dispatching action ADD_COUNTER]");
store.dispatch({type: "ADD_COUNTER", value: 10});