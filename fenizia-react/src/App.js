import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App(props) {
  return (
		<div className="container">
			<Header />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				{/* <Route path="/hero/:heroId" component={FeniziaDetail} />
				<Route path="/hero" component={HeroDetail} />
				<Route path="/heroes" component={HeroesPage} />
				<Route component={PageNotFound} /> */}
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
