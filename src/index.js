import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {ApolloProvider} from 'react-apollo';
import { Provider } from "react-redux";
import store from './store/store';
import App from "./Components/App/App";
import client from "./client";
import "./index.css";

ReactDOM.render(
	<ApolloProvider client={client}>
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
