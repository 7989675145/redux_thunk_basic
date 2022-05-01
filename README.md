Redux introduction
It is an open source js library for managing state values
Packages to be installed:
npm install redux
npm install react-redux
npm install redux-thunk //(it is a middleware used for dispatching the functions like from action creator to reducer) we have redux saga but thunk is popular
npm install redux-devtools-extension


here i used redux thunk
Thunk from redux-thunk
Thunk returns function instead of an object
Saga uses generators
Thunk is a middleware
Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action. Middleware helps you with logging, error reporting, making asynchronous requests, 

1.After creating the store we need to wrap the store values where the store component is being exported
2.In the project index.js is the place where store is exported,so there we are wrapping store
3. We have to wrap the <App /> with <provider store={store}> so that we can access the store values
4.Now creating reducers, for the convenience sake in general projects there may be more number of reducers.for that we have to combine all the reducers finally
Here the concept emerges combine reducer from redux
2 reducers are created and combined in another file called index.js and whole folder is reducers
1.Playerone
2.Playertwo
5.By using connect we can access all the state values in App.js

In the code i divided into 2 types means
  1.using payload we update store values (for playerone incrementing 5)
  2.without using payload defaultly increment (for remaining all 3 buttons the inc/dec)
