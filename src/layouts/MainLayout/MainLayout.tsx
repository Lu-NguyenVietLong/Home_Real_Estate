import React, { ReactNode } from 'react';

import Footer from '../LayoutComponents/Footer/Footer';
import Header from '../LayoutComponents/Header/Header';

type ComponentLayoutProps = {
    children: ReactNode;
};

function MainLayout({ children }: ComponentLayoutProps) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
