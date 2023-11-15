import React, {useEffect, useState, Component } from 'react';
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";

const DispatchedComponent = () => {
    const [foo, setFoo] = useState(0);

    useEffect(() => {
        setFoo(1)
    }, []);
    return (
        <p>I'm a dispatched component.</p>
    )
}

class PortalComponent extends Component {
    constructor() {
        super();
        this.state = {
            node: null,
        }
    }

    handleNode = (node) => this.setState({ node })

    render() {
        return (
            <div ref={this.handleNode}>
                Hello
                {this.state.node ? (
                    createPortal(<DispatchedComponent />, this.state.node)
                ) : null }
            </div>
        )
    }
}

const WebComponentApp = () => {
    useEffect(() => {
        // This fails
        // window.renderFromWebComponent(DispatchedComponent);
        // This fails as well
        window.renderFromWebComponent(PortalComponent);
    }, []);
    return (
        <div>I'm inside a web component</div>
    )
}
class MicroFrontendApp extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');

        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const root = createRoot(mountPoint);
        root.render(<WebComponentApp />);
    }
}

if (!globalThis.customElements.get('repro-microfrontend')) {
    globalThis.customElements.define('repro-microfrontend', MicroFrontendApp);
}
