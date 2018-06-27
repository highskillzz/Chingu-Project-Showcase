import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloProvider from 'react-apollo';
import store from './store/store';
import App from "./Components/App/App";
import client from "./client";
import "./index.css";

ReactDOM.render(
	<ApolloProvider client={client} store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById("root")
);
