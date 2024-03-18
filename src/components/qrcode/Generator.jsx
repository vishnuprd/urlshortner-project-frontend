import React, { useState } from 'react';
import './generator.css';
import Sidebarlayout from '../Layout/Sidebarlayout';

function Generator() {


    const [qrText, setQrText] = useState('');
    const [qrcode, setQrCode] = useState('');



    const handleQrgenerator = () => {
        setQrCode(qrText);
    };

    const handleInputChange = (e) => {
        setQrText(e.target.value);
    };

 

    return (
        <div>
            <Sidebarlayout>
                <div className="col-lg-12">
                    <h2>Meet the Shortner QR Code Generator: The simplest way to create and track QR Codes</h2>
                    <p>Generate a custom QR Code in seconds, share it with your audience, and instantly access your scan data — all inside the Shortner Connections Platform.</p>
                </div>

                <div className="qrcontainer">
                    <p>Enter text to Generate QR Code</p>
                    <input  style={{ textAlign: 'center' }}
                        type="text"
                        id="qrText"
                        placeholder="Text or URL"
                        value={qrText} 
                        onChange={handleInputChange} 
                    />

                    <div id="qrBox">
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcode}`}  
                            id="qrImg"
                            alt="QR Code"
                        />
                    </div>

                    <button onClick={handleQrgenerator}>Generate QR Code</button>
                    
                </div>
            </Sidebarlayout>
        </div>
    );
}

export default Generator;
