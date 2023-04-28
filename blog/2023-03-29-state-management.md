---
slug: state-management
title: "A Short Guide to React’s Powerful Duo : useReducer and UseContext"
authors: DevGenX
tags: [Hooks, Redux, Context]
---

![TradingLeague](../static/img/fusiongoku.png)

**useReducer** and **useContext** are two powerful hooks in React that can be used together to manage the state for your entire application. useReducer provides a way to manage complex state transitions in a more predictable and manageable way, while useContext allows you to pass data down the component tree without having to pass props manually through each level simply, making your data globally available.

For this blog, we’ll apply the code best practices that I’m aware of at the moment.

In your app, create a folder called “context”, and inside that folder, create a file called “IncrementContext” .

Let this code snippet above, be the guide throughout the blog. <span style={{"color":"red"}}>↓↓</span>

```javascript
import { createContext, useContext, useReducer } from 'react';
// Create a context to hold the state
const IncrementContext = createContext();
// Define the initial state
const initialState = {
  count: 0
};
// Define the reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
// Create a component that will provide the context
// IncrementProvider takes in an argument called children
const IncrementProvider = ({ children ) => {
  const [state, dispatch] = useReducer(reducer, initialState);

// In this return value, we passed-in children as the CONSUMER of the PROVIDER
// This will able children components to access the data inside the context
  return (
    <IncrementContext.Provider value={{ ...state, dispatch }}>
      {children}
    </IncrementContext.Provider>
  );
}
// Create a function that invokes the context
export const useIncrementContext = () => {
  return useContext(IncrementContext)
}
```

1. **Writing your context component and initialState variables**

```javascript
import { createContext, useContext, useReducer } from "react";
// Create a context to hold the state
const IncrementContext = createContext();
// Define the initial state
const initialState = {
  count: 0,
};
```

In this code snippet above, we imported three react hooks, **createContext, useContext and useReducer.**

- **CreateContext** is to create the context to hold the state
- **useContext** is used to invoke the context
- **useReducer** to manage the state variables and functionalities

We also declared the initialState object with a key-value pair, count with a default value of 0.

We will be passing this code into the useReducer hook, to build the functionalities.

2. **Writing your reducer function**

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
//Together with the reducer and initialState, we will be declaring both
//of this components inside the useReducer hook
// This will be declared inside the IncrementProvider
const [state, dispatch] = useReducer(reducer, initialState);
```

In the provided code snippet, the reducer function takes in the current state object and an action object with a type property. Depending on the action type, the reducer returns a new state object with the count property incremented or decremented accordingly. If an action type is not recognized, the reducer throws an error to indicate that an invalid action was dispatched.

3. **Writing the context provider and making the data globally accessible**

```javascript
// use useReducer to access both the reducer and initialState
const IncrementProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <IncrementContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </IncrementContext.Provider>
  );
};
// Wrapped the whole application, in the index.js with IncrementProvider
// This makes the context object be globally accessible
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IncrementProvider>
      <App />
    </IncrementProvider>
  </React.StrictMode>
);
```

The IncrementProvider is a custom provider component that uses useReducer to manage state and creates a context using createContext. The provider component accepts props as an argument and returns a provider component that wraps the child components.

The provider component uses the IncrementContext.Provider to provide the state and dispatch function to the child components via the context. It does this by passing an object containing the state and dispatch function as the value to the IncrementContext.Provider.

In the example code, the IncrementProvider is wrapped around the App component in index.js. This makes the state and dispatch function available to all child components of the App component.

By wrapping the whole application in the IncrementProvider, we ensure that all components have access to the state and can dispatch actions to modify it. This is a common pattern in React applications to manage global state using context and the useReducer hook.

4. **Accessing the data with your components**

```javascript
import { useIncrementContext } from "IncrementContext";
const MyComponent = () => {
  // No need to use useContext to invoke the context
  // Since we wrote a useIncrementContext function that invokes the context
  const { state, dispatch } = useIncrementContext();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};
```

The useIncrementContext is a custom hook that is used to consume the context created by the IncrementContext.Provider. This hook abstracts away the boilerplate code of using the useContext hook and makes it easier to access the context values.

In the example code, useIncrementContext is imported from the IncrementContext file. The MyComponent component uses the useIncrementContext hook to access the state and dispatch function from the context.

By using the useIncrementContext hook, we don't need to use the useContext hook directly in the component. Instead, we can simply invoke the useIncrementContext function to access the state and dispatch function from the context.

The MyComponent component renders a paragraph displaying the current count value from the state object. It also renders two buttons that dispatch an increment or decrement action when clicked.

This code snippet demonstrates how to use a custom hook to consume context values in a React component. It simplifies the process of using context and makes it easier to access the state and dispatch function from multiple components in the application.

Hope this blog helps!
