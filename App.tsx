{
  /*
import Message from './Message';

function App() {
  return <div><Message /></div>
}

export default App;
*/
}
{
  /*
import ListGroup from "./components/ListGroup";

function App() {
  return <div><ListGroup /></div>;
}

export default App;
*/
}
{
  /*
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "london", "paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
*/
}

{
  /*
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
*/
}

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [] = useState(false);

  return (
    <div>
      <Alert>My alert</Alert>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
