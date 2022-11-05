import logo from './assets/logo.svg'
import Header from './components/Header'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ErrorBoundary from './components/ErrorBoundaries'
import NotFound from './pages/404'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Header logo={logo}/>
          <Routes>
            <Route path="/" element={<Profile userName="KindEni" />} />
            <Route path="/projects" element={<Projects userName="KindEni" />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/projects/:name"
              element={<ProjectDetail userName="KindEni" />}
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  )
}

export default App
