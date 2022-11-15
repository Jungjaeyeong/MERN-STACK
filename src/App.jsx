import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import RouterConfig from "./RouterConfig";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <RouterConfig />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
