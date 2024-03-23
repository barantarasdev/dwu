import {memo} from 'react';
import Trand from '@/components/Home/components/Trand';
import Breaking from '@/components/Home/components/Breaking';
import Cards from '@/components/Home/components/Cards';

function Home() {
  return (
    <>
      <Trand />
      <Breaking />
      <Cards />
    </>
  );
}

export default memo(Home);
