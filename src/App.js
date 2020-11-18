import './App.css';
import 'antd/dist/antd.css';
import './index.css';

//import containers
import PageHeader from './containers/header';
import PageSider from './containers/sider';

//import antd components
import { Layout } from 'antd';

import MapContainer from './DirectionsMap';
import { withScriptjs } from 'react-google-maps';

const MapLoader = withScriptjs(MapContainer);


function App() {
  return (

    <Layout>
    <PageHeader />
    <Layout style={{ paddingTop: 64 }}>
      <PageSider />
      <Layout style={{ padding: '0 0 0 80px', height: '100%' }}>

        {/* router and content will be loaded here */}

        <div className="main_container">
          <div className="info_container">
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />
            info container<br />

          </div>
          <div className="map_container">
           <div style={{ display: 'flex', height: '100%' }}>
             <MapLoader 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key={API KEY HERE}"
                loadingElement={<div style={{ height: `100%` }} />}
                />
            </div>
          </div>
          <div className="notes_container">
            notes containerfdsafdsafdsafdsafdsafdsafd sa fdsa fdsa fdsafdas fdsa fdsa fdas fdsa fdsa fdafdasf da ffdas fa da
          </div>
        </div>

        {/* end of router and content */}


      </Layout>
    </Layout>
  </Layout>
  );
}

export default App;
