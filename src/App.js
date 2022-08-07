import Content from './components/ContentComponent';
import Header from './components/HeaderComponent';

function App() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  return (
    <div className="wrapper">
      <Header />
      <Content />
    </div>
  );
}
export default App;
