# React Hooks Example

## To run 

- npm i
- npm start

---
### Rules of Hooks
- Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.

- Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks)


---
### Hooks included

- *useState* :
  useState returns an array with a state variable and a setState function 
  `const [count,setCount]= useState(0)`


- *useEffect*:
  useEffect is used for the side effects required.
  
  Three variants:

  - componentDidMount: empty brackets [] in parameters

  - componentDidUpdate: state variable being updated

  - componentWillUnmount: return statement with function inside
