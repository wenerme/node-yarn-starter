import React from 'react';
import { NextPage } from 'next';
import { MyButton } from '@wenerme/node-yarn-starter-ui';
const Page: NextPage = () => {
  return (
    <div>
      <h2>NextJS Working!</h2>
      <div>
        <MyButton />
      </div>
    </div>
  );
};
export default Page;
