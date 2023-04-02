import { observer } from 'mobx-react-lite';
import React, {FC, useContext, useEffect, useState} from 'react';
import { Context } from './index';
import LoginForm from './components/LoginForm';
import { IUser } from './models/IUser';
import { UserService } from './services/UserService';
import { AxiosError } from 'axios';

const App: FC = () => {
  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect( () => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data); 
    } catch (e: AxiosError | any) {
      console.log(e.response?.data?.message)
    }
  }

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm/>
        <button onClick={getUsers}>All users</button>
      </div>
    );
  }


  return (
    <div>
      <h1>{store.isAuth ? `User is authorized ${store.user.email}` : "LOG IN please"}</h1>
      <h1>{store.user.isActivated ? 'Account is activated' : 'Activate account, please'} </h1>
      <button onClick={() => store.logout()}>Log out</button>
      <div>
        <button onClick={getUsers}>All users</button>
      </div>
      {users.map(user => <div key={user.email}>{user.email}</div>)}

    </div>
  );
}

export default observer(App);
