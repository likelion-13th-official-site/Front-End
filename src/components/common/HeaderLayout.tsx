import Header from './header/Header';

export default function HeaderLayout() {
  return (
    <div className="w-full bg-surface-primary z-1000 flex flex-col items-center sticky top-0">
      <Header />
    </div>
  );
}
