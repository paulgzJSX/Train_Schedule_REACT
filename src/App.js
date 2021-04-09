import { EuiPageTemplate, EuiLink } from '@elastic/eui';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Schedule from './pages/Schedule';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';

const rightSideItems = [
  <Link to='/'><EuiLink>Home</EuiLink></Link>,
  <Link to='/schedule'><EuiLink>Schedule</EuiLink></Link>
]

function App() {
  return (
    <BrowserRouter>
      <EuiPageTemplate
        template="centeredContent"
        pageContentProps={{ paddingSize: 'none' }}
        pageHeader={{
          iconType: 'logoElastic',
          pageTitle: 'Расписания',
          rightSideItems
        }}
      >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/schedule' component={Schedule} />
        </Switch>
      </EuiPageTemplate>
    </BrowserRouter>
  )
}

export default App
