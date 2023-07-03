<template>
     <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background"></div>
                <div className="auroranav-content">
                    <h2 className="auroranav-title">
                        <Link to="/">Aurora Editor</Link>
                    </h2>

                    <div className="auroranav-menu">
                        <a href="#auroranav-menustate" className="auroranav-menucta-anchor auroranav-menucta-anchor-open" id="auroranav-menustate-open">
                            <span className="auroranav-menucta-anchor-label">Open Menu</span>
                        </a>
                        <a href="/#" className="auroranav-menucta-anchor auroranav-menucta-anchor-close" id="auroranav-menustate-close">
                            <span className="auroranav-menucta-anchor-label">Close Menu</span>
                        </a>
                        <div className="auroranav-menu-tray">
                            <ul className="auroranav-menu-items">
                                <li className="auroranav-menu-item">
                                    <Link to="/" className="auroranav-menu-link">Aurora Editor</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/included" className="auroranav-menu-link">What’s included</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/marketplace" className="auroranav-menu-link">Marketplace</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/account" className="auroranav-menu-link">Account</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <a href="https://github.com/AuroraEditor/AuroraEditor" className="auroranav-menu-link">GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>  
</template>