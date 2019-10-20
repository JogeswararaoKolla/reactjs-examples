## Summary of useState Hook

- React Hooks allow you to use React features without having to write class.
- The useState Hook lets you add the state to functional components.
- In classes the state is always an Object
- with useState hook the state doesn't have to be an object
- The useState hook returns an array with 2 elements
- The first element is current value of the state, and the second element is state setter function.
- New state value is depends ont he previous state value ? yes we can pass a function to the setter function
- When dealing with objects or arrays,always make sure to spread your state variable and then call the setter function.
- Context provides a way to pass data through the component tree without having to
  pass props manually at every level
