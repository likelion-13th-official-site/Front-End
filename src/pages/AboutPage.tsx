import AsciiArt from '@/components/AboutPage/AsciiArt';
import FifthSection from '@/components/AboutPage/FifthSection';
import FirstSection from '@/components/AboutPage/FirstSection';
import FourthSection from '@/components/AboutPage/FourthSection';
import SecondSection from '@/components/AboutPage/SecondSection';
import SeventhSection from '@/components/AboutPage/SeventhSection';
import SixthSection from '@/components/AboutPage/SixthSection';
import ThirdSection from '@/components/AboutPage/ThirdSection';

export default function AboutPage() {
  return (
    <main className="main w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-screen grid grid-rows-[4fr_1fr] 2xl:grid-rows-[5fr_1fr]">
        <AsciiArt />
        <FirstSection />
      </div>

      <SecondSection />

      <ThirdSection />

      <FourthSection />

      <FifthSection />

      <SixthSection />

      <SeventhSection />
    </main>
  );
}
