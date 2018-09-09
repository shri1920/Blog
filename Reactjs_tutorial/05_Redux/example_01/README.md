## Redux basics

Install redux using below command
````sh
npm install redux --save
````

### Actions
- Actions are payloads of information that send data from your application to your store.
- They are the only source of information for the store.
- You send them to the store using store.dispatch().
- dispatch accepts action as an argument. Eg: dispatch({type: "INC_COUNTER"})
- You may pass information as payload along with the action. Eg: dispatch({type: "ADD_COUNTER", value: 10})

### Reducers
- Reducers specify how the application's state changes in response to actions sent to the store.
- Accepts 2 arguments, The current state and action.
- The reducer is the only thing update the state.
- Reducer returns the updated state.

### Store
- Store Holds application state.
- State is Accessed via getState().
- Updated via dispatch(action).
- Subscribed or listened using subscribe(listener).
- createStore() is used to create new redux store. 
- Store needs to be initialised with reducer. So pass the reducer to createStore().

