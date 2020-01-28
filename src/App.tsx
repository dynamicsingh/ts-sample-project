import React from 'react';
import './App.css';
import Comp from '@dynamicsingh/reactpack1';
import PropTypes, {InferProps} from "prop-types";

// this can be imported from the JS package and used as it is.
const myTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    age: PropTypes.number.isRequired
};

type MyComponentProps = InferProps<typeof myTypes>;

const App: React.FC = () => {
    //comment this to fix the breakage
  const newObj: MyComponentProps  = {
  };
  //and uncomment the following to fix

  //const newObj: MyComponentProps  = {
    //       firstName: '',
    //       age: 22,
    //   };

  console.log("newObj==>", newObj);
  return (
    <div className="App">
      <Comp firstName="John" lastName="Doe" age={23}/>
    </div>
  );
}

export default App;
