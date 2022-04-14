import { UserInfoBar } from 'pages/layouts/common-layout/components';
import React, { useEffect, useState } from 'react';
import { CommonLayout } from 'pages/layouts';

export const MainPage = () => {
  const [user, setUser] = useState<any>({});
  console.log(user)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);
  
  const rightSection = <UserInfoBar user={user.id} />;

  return (
    <CommonLayout rightSection={rightSection}>
      <div>MainPage</div>
    </CommonLayout>
  );
};
