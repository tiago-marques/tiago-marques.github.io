import React from 'react'
import Octicon from 'react-component-octicons';
import './Footer.css'

const Footer = props => {
    return (
        <div className="container-footer">
            <hr style={{margin: 0}} />
            <div className="content-footer">
                <div className="flex-footer">
                    <p>contact</p>
                    <hr />
                    <p><Octicon name="mail" /> <a className="link-footer" href="mailto:me@tiagomarques.com.br">me@tiagomarques.com.br</a></p>
                    <p><Octicon name="comment" /> <a className="link-footer" href="https://twitter.com/metiagomarques">@metiagomarques</a></p>
                </div>
                <div className="flex-footer">
                    <p>find me</p>
                    <hr />
                    <p><Octicon name="mark-github" /> <a className="link-footer" href="https://github.com/tiago-marques">tiago-marques</a></p>
                    <p><Octicon name="package" /> <a className="link-footer" href="https://www.npmjs.com/~tiago-marques">~tiago-marques</a></p>
                    {/* <p><Octicon name="gift" /> <a className="link-footer" href="mailto:me@tiagomarques.com.br">contact me by email</a></p> */}
                </div>
                <div className="flex-footer">
                    <p>hire & support</p>
                    <hr />
                    <p><Octicon name="mail" /> <a className="link-footer" href="mailto:contact@zephyrplace.com">contact@zephyrplace.com</a></p>
                    <p><Octicon name="mail" /> <a className="link-footer" href="mailto:support@zephyrplace.com">support@zephyrplace.com</a></p>
                </div>
                <div className="flex-footer">
                    <p>license</p>
                    <hr />
                    <p><Octicon name="law" /> <a className="link-footer" href="https://choosealicense.com/licenses/mit/">MIT License</a></p>
                    <p>2018</p>
                </div>
            </div>
        </div>
    )
}

export default Footer