import FirstSection from '@/components/PeoplePage/FirstSection';
import { cardinalList } from '@/components/PeoplePage/memberDB';
import SecondSection from '@/components/PeoplePage/SecondSection';
import { useState } from 'react';

export default function PeoplePage() {
  const [selectedCardinal, setSelectedCardinal] = useState(cardinalList[0]);
  const onClickCardinal = (cardinal: number) => {
    setSelectedCardinal(cardinal);
  };
  return (
    <main className="wrapper w-full flex flex-col items-center justify-center">
      <FirstSection
        selectedCardinal={selectedCardinal}
        onClickCardinal={onClickCardinal}
      />

      {selectedCardinal === cardinalList[0] && <SecondSection />}
    </main>
  );
}
