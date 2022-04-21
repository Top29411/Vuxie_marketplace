import logo from './logo.svg';
import './App.css';
import Header  from './components/Header.js'
import Main from './components/Main.js'
import { useRoutes, Link, useQueryParams } from 'raviger'
import CardView from './components/Card_view';

const routes = {
  '/': () => <Main />,
  '/detail/:id': ({ id }) => <CardView id={id} />,
}




function App() {

  let route = useRoutes(routes)

  return (
    <div className="dark-scheme de-grey">
        <div id="wrapper">
          <Header/>
          {route}
        </div>
    </div>
  );
}

export default App;
