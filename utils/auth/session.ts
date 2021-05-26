import { useState, useEffect } from 'react';
import Router from 'next/router';
import MockUser from './_data';
import { User } from '~/@types';

const useSession = () => {
  const [session, setSession] = useState<User | null>();
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sesssionEffect = async () => {
      const session = await getSession();
      setSession(session);
    };
    sesssionEffect();
  }, []);

  return session;
};

const getSession = async () => {
  const token = localStorage.getItem('access_token');
  //   const res = await axios.get('/auth/session', {
  //     headers: { Authorization: token },
  //   });

  return token ? MockUser : null;

  //   return session || null;
};

export const signOut = () => {
  Router.push('/');
  setTimeout(() => {
    Router.reload();
  }, 100);
  localStorage.setItem('access_token', '');
};

export default useSession;
