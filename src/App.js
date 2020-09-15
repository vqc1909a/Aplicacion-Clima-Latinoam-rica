import React, {Fragment} from 'react';
import Header from './components/Header';
import Clima from './components/Clima';
function App() {
  return (
    <Fragment>
      <Header title="Clima Latinoamérica" />
      <main>
        <Clima></Clima>
      </main>
    </Fragment>
    );
}

export default App;
