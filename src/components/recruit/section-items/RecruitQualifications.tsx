const qualificationList = [
  '서강대학교 재학생 및 휴학생',
  '필수 활동(정기 교육세션, 중앙 해커톤, 데모데이)에 모두 참석 가능하신 분',
  '개인 노트북 보유자',
  '웹 개발에 열정이 있는 사람',
  '협업의 경험을 쌓고자 하는 사람'
];

export default function RecruitQualifications() {
  return (
    <div
      id="qual-section"
      className="w-full pl-[1.2rem] flex flex-col gap-[1.6rem]"
    >
      <h1 className="text-[1.4rem] font-[900] leading-[140%]">모집 대상</h1>
      <div id="qual-list" className="w-full flex flex-col">
        {qualificationList.map((qual, idx) => (
          <div
            id="qual-box"
            key={idx}
            className="w-full text-[1.4rem] font-[400] leading-[140%]"
          >
            • {qual}
          </div>
        ))}
      </div>
    </div>
  );
}
