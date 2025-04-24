import {useEffect, useState} from 'react';
import {ProductType} from '../types/typeProduct';

export const useGetProducts = () => {
  const url = 'https://fakestoreapi.com/products';
  const [result, setResult] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResult(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ha ocurrido un error desconocido');
        }
      }
    })();
  }, []);

  return {
    result,
    loading,
    error,
  };
};
