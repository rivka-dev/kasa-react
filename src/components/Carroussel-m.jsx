1:  import React, { useState } from 'react'; 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0); 5:
 6:    return (
 7:      <div>
 8:        <p>Vous avez cliqué {count} fois</p>
 9:        <button onClick={() => setCount(count + 1)}>10:         Cliquez ici
11:        </button>
12:      </div>
13:    );
14:  }