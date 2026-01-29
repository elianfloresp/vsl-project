import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VSLPage } from './pages/VSLPage';
import { CheckoutPage } from './pages/CheckoutPage'; 
import { ThankYouPage } from './pages/ThanksPage';
import { NotFound } from './pages/Notfound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VSLPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;