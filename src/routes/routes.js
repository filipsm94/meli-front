import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from '../components/details/details';
import Home from '../components/home/home';
import Layout from '../components/layout/layout';
import ResultPage from '../components/result/result';

const AppRouter  = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/items" component={ResultPage} exact></Route>
                <Route path="/items/:id" component={DetailsPage}></Route>
                <Route path="/" component={Home} exact></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter