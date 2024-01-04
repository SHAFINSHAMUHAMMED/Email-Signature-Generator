import React, { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import Temp1 from '../Templates/temp1';
import Temp2 from '../Templates/temp2';
import Temp3 from '../Templates/temp3';

function EmailSignature({ data }) {
    const containerRef = useRef();

    const renderTemplate = () => {
        switch (data.selectedOption) {
            case 'option1':
                return <Temp1 data={data} />;
            case 'option2':
                return <Temp2 data={data} />;
            case 'option3':
                return <Temp3 data={data} />;
            default:
                return null;
        }
    };

    const copyToClipboard = () => {
        const html = ReactDOMServer.renderToStaticMarkup(renderTemplate());
        const tempDiv = document.createElement('div');
        tempDiv.contentEditable = true;
        tempDiv.innerHTML = html;
        document.body.appendChild(tempDiv);

        const range = document.createRange();
        range.selectNodeContents(tempDiv);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        document.body.removeChild(tempDiv);
        alert('Template copied to clipboard');
    };

    return (
        <div>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
    );
}

export default EmailSignature;
