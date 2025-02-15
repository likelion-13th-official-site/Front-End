import FirstSection from '@/components/PeoplePage/FirstSection';
import { cardinalList } from '@/components/PeoplePage/memberDB';
import SecondSection from '@/components/PeoplePage/SecondSection';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PeoplePage() {
  const [selectedCardinal, setSelectedCardinal] = useState(cardinalList[0]);
  const onClickCardinal = (cardinal: number) => {
    setSelectedCardinal(cardinal);
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="blueBackground wrapper w-full h-full flex flex-col  items-center  pt-[5.752rem] max-2xl:pt-[18.2rem] bg-gradient-to-r from-surface-tertiary from-0% via-[#D3E8FF] via-27% to-text-primary to-90%"
    >
      <FirstSection
        selectedCardinal={selectedCardinal}
        onClickCardinal={onClickCardinal}
      />

      {selectedCardinal === cardinalList[0] && <SecondSection />}
    </motion.main>
  );
}
