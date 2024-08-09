import { Provider } from 'react-redux'
import Home from './Pages/Home'
import GlobalStyle from './Styles/global'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  )
}

export default App
