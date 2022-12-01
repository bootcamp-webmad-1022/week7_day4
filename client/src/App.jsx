import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';



const App = () => {

  const [showToast, setShowToast] = useState(true)
  const [toastMessage, setToastMessage] = useState('Mensaje de ejemplo')

  return (
    <div className="App pb-5">
      <Navigation />
      <AppRoutes setShowToast={setShowToast} setToastMessage={setToastMessage} />
      <Footer />

      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{ position: 'fixed', bottom: 10, right: 10 }}>
        <Toast.Header>
          <strong className="me-auto">Mensaje</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>

    </div>
  );
}

export default App;
