---
slug: JavaScript
title: "JavaScript : Basics of Async/Await vs Native Promises"
authors:
  name: DevGenX
  title: Freelance
  url: https://github.com/DevGenX
  image_url: https://github.com/DevGenX.png
tags: [Javascript, Promises, Async/Await]
---

![TradingLeague](../static/img/understandingjs.png)

Async/await and Promises are both ways to execute asynchronous code in Javascript. They are written and structured in different ways and have their own certain advantages and disadvantages when it comes to use cases.

## Promises

Promises were introduced in ECMAScript 2015 to handle asynchronous code. They use the `.then` and `.catch` keywords to handle both success and failures in the code, and developers can chain multiple asynchronous operations in a single interface.

```javascript
const fetchData = () => {
  return fetch('https://api.example.com')
  .then(response => response.json())
  .then(data => {
  console.log(data)
  }
})
```

## Async/Await

Async/await was introduced in ECMAScript 2017 and is supported in all modern browsers. It is used to run asynchronous code, but is written and structured like synchronous-style code using the `async` and `await` keywords.

```javascript
const fetchData = async () => {
  const response = await fetch("https://api.example.com/api");
  const data = await response.json();
  console.log(data);
};
```

## Why Async/Await is Better

There are several reasons why async/await is a better approach to handle asynchronous code:

```javascript
// Using async/await
const fetchData = async () => {
try {
  const response = await fetch("https://api.example.com/api")
  const data = await response.json()
  console.log(data)
}catch(err) => {
  console.log(err)
  }
}

// Using promise chain

const fetchData = ()  => {
  return fetch("https://api.example.com/api")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
```

1. **Readability:** Code written in async/await is in a synchronous-like structure that makes it easier to work with asynchronous code. One of the most important skills to have as a developer is to be able to write clean, optimized, and readable code. Async/await provides a more concise and straightforward lines of code that are assigned to a variable, making them accessible without the need for promise chaining. They are also easier to debug and maintain.

2. **Error Handling and Debugging:** Async/await needs to be wrapped inside a try/catch block to handle both success and failures in the code. You can also use the debugger to pause the execution of a function at a specific point to understand how the promise is being resolved or rejected. While promises allow us to put the error handler at the end of the promise chain, a huge disadvantage of using the debugger in the promise chain is the scope as the execution will only stop where "debugger" is encountered.
   It's a mess to use the debugger in native promises, as you have to be specific on putting breakpoints in the promise chain. By just looking at the code, the approach of using async/await wrapped in a try/catch block is more organized, therefore easier to debug.

3. **Handling multiple values**

### Native promise

```javascript
// Handling multiple values
const fetchData = () => {
  return fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
      return fetch(`/api/data/${data.id}`)
        .then((response) => response.json())
        .then((user) => console.log(user));
    });
};
```

Handling multiple values in this promise chain is pretty straightforward but it’s very easy to get lost in the code with so much indentations, brackets and stuff. And harder to identify breakpoints to execute the debugger on.

### Async/await

```javascript
const fetchData = () => {
  try {
    const response = await fetch('/api.example.com/data');
    const data = await response.json();
    const ApiResponse = await fetch(`/api/data/${data.id}`);
    const user = await ApiResponse.json();
    return { data, user };
  } catch (err) {
    console.error(err);
  }
}
```

Using async/await to handle multiple values makes the lines of code straightforward, organized and readable.

### Pitfalls

1. **Browser Compatibility**: Async/await is a relatively new language feature of Javascript and may only be supported by modern browsers. While Promises, have been around for longer and more widely utilized.

2. **Error/Stack traces**: Handling errors in async/await may not be as accurate as handling errors with Promises. Errors in async/await function are thrown in different context while Promises uses catch at end of the promise chain which is more flexible and accurate.
3. **Handling multiple asynchronous operations**: Native promises provide a cleaner syntax on handling multiple asynchronous operations using the method Promise.all . Async/await in this case may become too verbose.

Conclusion :

The use of async/await instead of the native promise depends on the preference of every developer. There maybe older codebases that are still written in the native promise method as async/await are new and may only be supported by modern browsers.

If you aren’t handling multiple asynchronous operations and thinking of efficiency and organization, it’s better for you to use async/await.

![TradingLeague](../static/img/meme1.png)
