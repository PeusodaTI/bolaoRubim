import '../styles/main.css';
import { MyProvider } from './context/MyContext';
import { CreateRoutes } from './routes';

function App() {
  return (
    <MyProvider>
      <CreateRoutes />
    </MyProvider>
  )
}

export default App


