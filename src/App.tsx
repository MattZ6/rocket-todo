import { Provider } from './contexts';

import { HomePage } from './pages';

import './styles/global.css';

export default function App() {
  return (
  <Provider>
    <HomePage />
  </Provider>
  )
};
