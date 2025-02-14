import { useEffect, useState } from 'react';

export default function DdayCounter() {
  const [dayDiff, setDayDiff] = useState(0);

  const dDayCountFunc = () => {
    const today = new Date();
    const dueDate = new Date('2025-03-06');
    const timeDiff = dueDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDayDiff(dayDiff);
  };

  useEffect(() => {
    dDayCountFunc();
  }, []);

  return (
    <div
      id="dday-counter"
      className="text-[9.6rem] font-[500] leading-[140%] font-pp"
    >
      {dayDiff === 0 ? <h3>D-Day</h3> : <h3>D-{dayDiff}</h3>}
    </div>
  );
}
