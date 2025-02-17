import FirstSection from '@/components/PeoplePage/FirstSection';
import { cardinalList } from '@/components/PeoplePage/memberDB';
import SecondSection from '@/components/PeoplePage/SecondSection';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PeoplePage() {
  const [selectedCardinal, setSelectedCardinal] = useState(cardinalList[0]);
  const onClickCardinal = (cardinal: number) => {
    setSelectedCardinal(cardinal);
  };

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="blueBackground transition-all duration-300 ease-in-out w-screen h-full  ">
      <motion.div
        style={{
          height: screenSize < 1100 ? '40rem' : '100vh'
        }}
        className="horizontal_gradient w-[50%] text-[20rem] flex items-center justify-center fixed max-2xl:sticky top-0 right-0 h-full max-2xl:w-[100%] max-2xl:left-auto"
      ></motion.div>

      <main className="blueBackground w-[50%] pt-[12.8rem] px-[3.2rem] flex flex-col gap-[12.8rem] max-2xl:w-[100%] max-2xl:z-2000 relative bg-text-invert max-2xl:pt-[3.2rem] max-2xl:px-[3.2rem] max-md:pt-[1.6rem] max-md:px-[1.6rem]">
        <FirstSection
          selectedCardinal={selectedCardinal}
          onClickCardinal={onClickCardinal}
        />

        {selectedCardinal === cardinalList[0] && <SecondSection />}
      </main>
    </div>
  );
}
