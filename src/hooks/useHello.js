// src/hooks/useHello.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function useHello() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error));
  }, []);

  return hello;
}

export default useHello;
