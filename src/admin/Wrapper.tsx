import React from 'react';
import { PropsWithChildren } from 'react';
import Menu from './components/Menu';
import Nav from './components/Nav';

const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <Nav /> 
            <div className="container-fluid">
                <div className="row">                
                    <Menu />
                    <main className="container footer" >
                        {props.children}
                    </main>
                </div>
            </div>
            <footer className="text-muted bg-dark py-5">
                <div className="container">
                    <p className="float-end mb-1">
                    <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
        </div>
    );
};

export default Wrapper;