import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
window.ZOHO.embeddedApp.on("PageLoad",function(data){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>
  );
})
window.ZOHO.embeddedApp.init();




