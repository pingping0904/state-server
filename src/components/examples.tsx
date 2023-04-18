import { useState } from '@state-less/react-server';
import { ServerSideProps } from './ServerSideProps';

export const HelloWorldExample1 = () => {
    const [count] = useState(0, { key: "count", scope: "global" });
  
    const increase = () => {
      throw new Error("Not implemented");
    };
  
    return <ServerSideProps count={count} increase={increase} />;
  };
