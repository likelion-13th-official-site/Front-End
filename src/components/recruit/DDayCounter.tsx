import { useEffect, useState } from 'react';

export default function DdayCounter({
  dayDiff,
  setDayDiff
}: {
  dayDiff: number;
  setDayDiff: (value: number) => void;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const dDayCountFunc = () => {
    const now = new Date();
    const dueDate = new Date('2025-03-05T23:59:59+09:00');
    // const dueDate = new Date('2025-02-26T23:59:59+09:00');

    const timeDiff = dueDate.getTime() - now.getTime();

    const newDayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDayDiff(newDayDiff);

    if (newDayDiff === 0) {
      updateTimeLeft();
    }
  };

  const updateTimeLeft = () => {
    const interval = setInterval(() => {
      const now = new Date();
      const dueDate = new Date('2025-03-06T23:59:59+09:00');
      // const dueDate = new Date('2025-02-26T23:59:59+09:00');
      const timeDiff = dueDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    dDayCountFunc();
    if (dayDiff === 0) {
      updateTimeLeft();
    }
  }, [dayDiff]);

  return (
    <div
      id="dday-counter"
      className="text-[9.6rem] font-[500] leading-[140%] font-pp max-md:text-[5.8rem] max-md:pt-[2rem] max-md:pb-[2rem]"
    >
      {dayDiff > 0 && <h3>D-{dayDiff}</h3>}
      {dayDiff === 0 && timeLeft && (
        <h3>
          {timeLeft.hours.toString().padStart(2, '0')}:
          {timeLeft.minutes.toString().padStart(2, '0')}:
          {timeLeft.seconds.toString().padStart(2, '0')}
        </h3>
      )}
    </div>
  );
}
