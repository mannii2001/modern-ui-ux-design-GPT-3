import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='googlrLogo'/>
    </div>
    <div>
      <img src={slack} alt='slack'/>
    </div>
    <div>
      <img src={atlassian} alt='atlassin'/>
    </div>
    <div>
      <img src={dropbox} alt='dropbox'/>
    </div>
    <div>
      <img src={shopify} alt='shopify'/>
    </div>
  </div>
);

export default Brand;