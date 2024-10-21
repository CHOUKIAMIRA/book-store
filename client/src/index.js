import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

// Importer Provider de react-redux
import { Provider } from "react-redux";

// Importer le store que tu as créé

import { BrowserRouter } from "react-router-dom";
import{ store }from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <BrowserRouter>
 <Provider store={store}> 
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
 </BrowserRouter>
 
);
