import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

const MicroFrontendRender = () => {
    return (
        <>
            <repro-microfrontend></repro-microfrontend>
        </>
    )
}
const HostApp = () => {
    const [WebComponentContent, setWebComponentContent] = useState(null);
    globalThis.renderFromWebComponent = async (Component) => {
        setWebComponentContent(() => Component);
    }

    return (
        <div>
            Hello world
            <MicroFrontendRender />
            {WebComponentContent ? (
                <WebComponentContent />
            ) : null}
        </div>
    )
}



const main = () => {
    const node = document.getElementById('root');
    const root = createRoot(node);
    root.render(<HostApp />);
};

main();
