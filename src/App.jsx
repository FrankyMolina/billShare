import Layout from './components/layout';
import DataContainer from './components/DataContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <DataContainer />
      </Layout>
    </div>
  );
}

export default App;
