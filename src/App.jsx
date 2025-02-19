import React from 'react';
//import Layout from './Layout';
import Layout from './index-page/Layout';
import Layouts from './gallery-page/Layouts';


const App = () => {
  return (
    <div>
      <Layout/>
      <div>
        <Layouts/>

      </div>
    </div>

  );
};

export default App;