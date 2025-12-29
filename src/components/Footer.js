import React from 'react';
import { Mail, MessageCircle, GitHub, Package, Gift } from 'react-feather';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="content-footer">
                <div className="flex-footer">
                    <h3>contact</h3>
                    <p><Mail size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="mailto:me@tiagomarques.com.br">me@tiagomarques.com.br</a></p>
                    <p><MessageCircle size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="https://twitter.com/metiagomarques">@metiagomarques</a></p>
                </div>
                <div className="flex-footer">
                    <h3>find me</h3>
                    <p><GitHub size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="https://github.com/tiago-marques">tiago-marques</a></p>
                    <p><Package size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="https://www.npmjs.com/~tiago-marques">~tiago-marques</a></p>
                </div>
                <div className="flex-footer">
                    <h3>hire & support</h3>
                    <p><Mail size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="mailto:contact@zephyrplace.com">contact@zephyrplace.com</a></p>
                    <p><Mail size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="mailto:support@zephyrplace.com">support@zephyrplace.com</a></p>
                </div>
                <div className="flex-footer">
                    <h3>license</h3>
                    <p><Gift size={16} style={{ display: 'inline', marginRight: '8px' }} /> <a className="link-footer" href="https://choosealicense.com/licenses/mit/">MIT License</a></p>
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;