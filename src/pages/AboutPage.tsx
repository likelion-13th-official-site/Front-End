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
    <main className="main w-full flex flex-col items-center justify-center pt-[5.752rem] max-2xl:pt-[18.2rem]">
      <AsciiArt />

      <FirstSection />

      <SecondSection />

      <ThirdSection />

      <FourthSection />

      <FifthSection />

      <SixthSection />

      <SeventhSection />
    </main>
  );
}
