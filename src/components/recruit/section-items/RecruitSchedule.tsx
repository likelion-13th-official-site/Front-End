const scheduleList = [
  { detail: '1차 서류 접수', date: '2025.02.18 ~ 03.06' },
  { detail: '1차 서류 결과 발표', date: '2025.03.08' },
  { detail: '2차 면접', date: '2025.03.10 ~ 03.12' },
  { detail: '최종 합격자 발표', date: '2025.03.14' },
  { detail: 'OT', date: '2025.03.17' }
];

export default function RecruitSchedule() {
  return (
    <div
      data-aos="fade-up"
      id="schedule-section"
      className="w-full flex flex-col gap-[1.6rem]"
    >
      <h1 className="text-[1.4rem] font-[900] leading-[140%]">모집 일정</h1>
      <div
        id="schedule-list"
        className="w-full flex flex-col border-t border-text-primary"
      >
        {scheduleList.map((schedule, idx) => (
          <div
            id="schedule-box"
            key={idx}
            className="w-full grid grid-cols-2 py-[0.4rem] border-b"
          >
            <div
              id="schedule-date"
              className="text-[1.4rem] font-[400] leading-[140%]"
            >
              {schedule.date}
            </div>
            <div
              id="schedule-detail"
              className="text-[1.4rem] font-[400] leading-[140%]"
            >
              {schedule.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
