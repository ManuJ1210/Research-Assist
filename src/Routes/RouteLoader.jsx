import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function RouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); 

    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center preloader js-preloader z-50">
      <img className='h-30' src="/images/preloader.gif" alt='loader'/>
    </div>
  ) : null;
}

export default RouteLoader;
