import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import PriceList from './pages/PriceList';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading message="Memuat PremiumFlix..." />;
  }

  return (
    <div className="App">
      <Header />
      <PriceList />
      <Footer />
    </div>
  );
}

export default App;
