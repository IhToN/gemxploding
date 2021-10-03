import React, { useEffect, useState } from 'react';
import { Card } from '@gemxploding/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Card>({ id: 1, name: Test'' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to game!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <div>{m.id}: {m.name}</div>
    </>
  );
};

export default App;
