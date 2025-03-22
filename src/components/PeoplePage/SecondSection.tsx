const names = [
  'Jumagul Alua',
  '강유진',
  '김가윤',
  '김서연',
  '김승규',
  '김준수',
  '김지오',
  '김현중',
  '노수현',
  '노현호',
  '문금미',
  '박서진',
  '박소린',
  '박지윤',
  '송명은',
  '서혜원',
  '엄해윤',
  '오서현',
  '원종윤',
  '유지오',
  '이예나',
  '이현서',
  '이동형',
  '전수아',
  '전해찬',
  '조효원',
  '주현수',
  '차현서',
  '최성민',
  '최윤서',
  '최윤서',
  '한서정',

  '한수민'
];

export default function SecondSection() {
  return (
    <section className="w-full max-w-[151.2rem] h-[46.8rem]  gap-[2.4rem] flex flex-col justify-start">
      <div className="leftsection flex justify-between w-full">
        <div className="Leader text-text-primary font-d2 font-[700] line-height-[1.4] text-[1.4rem]">
          아기사자
        </div>
      </div>

      <div className="rightSection border-y-[1px] w-full text-text-primary font-d2 line-height-[1.4] text-[1.4rem] pl-0 grid grid-cols-4 max-2xl:grid-cols-6 max-md:grid-cols-4">
        {names.map((name, key) => (
          <div key={key}>{name}</div>
        ))}
      </div>
    </section>
  );
}
