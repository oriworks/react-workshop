import React from 'react';

import Page from './shared/components/page'

const name = "Marcos"
const App = () => {
  return (
    <div>
      <Page name={name}>
        <span>!!!</span>
      </Page>
    </div>
  )
}

export default App;
