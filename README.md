## React Hooks: useState and useEffect

## Challenge Scope

This repository contains the fourth Dinasours coding challenge taking place on July 18, 2020.  Participant submissions can be found at the bottom of this document!

## Overview

Everything in a React Application is separated into _components_. Sometimes, in your application, you may want your component to have values that can update while the component is displayed on the page. These values are called **state**.

Examples of state in React are:

- An array of items you want to buy in an e-commerce store
- A string containing a color value that updates the background color
- An integer holding a user's score in a game

Other times, you may want to perform side effects. Effects run after every completed render.  Examples of side effects in React are:

- Data fetching
- Setting up a subscription 
<!-- (similar to queries, but instead of immediately returning a single answer, a result set of fields are sent upon event trigger on the server) -->
- Manually changing the DOM
- Other mutations, timers, logging, etc.

## React Hooks: Implementation

To access the React Hook useState in a component:

- **import** useState in the component file
- **set up** the **state value**, **state updater function**, and the **initial value**
- **access** the state value by using the state value
- **update** the state value by using the state updater function

To access the React Hook useEffect in a component:

- **import** useEffect in the component file
- **set up** the callback function

For a more technical explanation, [refer to the docs here.](https://reactjs.org/docs/hooks-reference.html#usestate) 


We've provided samples in the starter code (this repo) demonstrating how you might use both hooks.

1.  Changing the document title with useEffect:

```javascript
// import React Hooks
import React, { useState, useEffect } from 'react';

const Example = () => {
    // declare a [state, updateState] = set(initialValue) 
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update document title using the browser API 
        document.title = `You clicked ${count} times`;
    });

    // render component
    return (
        <div>
            <p> You clicked {count} times </p>
            <button onClick={ () => setCount(count + 1) } >
                Click Me! 
            </button>
        </div>
    )
}

export default Example;
```

2. Fetching data from an API with useEffect:

```javascript
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(API_URL) // use JavaScript's fetch method to get data from an API
      .then(resp => resp.json()) // take the API response and turn it into JSON
      .then(json => {
        setState(json.results); // update the value of state with results array
      });
  }, []);
```

## The Challenge: Connect to an API with useEffect!

Now that you have a basic understanding of how state and effects work, we want you to flex your creative muscles and **connect to one of the following APIs**.

1.  [Poké API](https://pokeapi.co)
2.  [News API](https://newsapi.org/)
3.  [Trivia API](https://opentdb.com/api_config.php)
4.  [Joke API](https://rapidapi.com/Sv443/api/jokeapi)
5.  [Cocktail DB](https://www.thecocktaildb.com/api.php)


If you want to get the most out of this challenge:

- Diagram/Plan how you want to display the API data 
- Create your own class/functional component from scratch!
  - **Use the ReferenceComponent.js as a guide, DO NOT copy/paste it!**
- Render your new component in App
- Add the basic functionality and test as you go
- Share your creation with the rest of us!

Be creative, be silly, and use the internet for inspiration! This is an opportunity to challenge yourself and have fun!

## Participant Submissions

Shawn Huang Fernandes - Pokemon Dance Party: https://github.com/In-It-Together/c4_useEffect/tree/shf
