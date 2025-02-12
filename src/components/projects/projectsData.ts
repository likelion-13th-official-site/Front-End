export const projectsData = [
  {
    id: 1,
    title: '13기 공식 사이트',
    year: 2025,
    tab: '13th',
    teamName: '13기 운영진',
    PM: null,
    DE: '이선명',
    FE: '김경우, 김별, 유민우',
    BE: '나현진, 박정주, 정파란, 윤예은',
    stack: 'React, Typescript, Tailwind CSS, Spring Boot',
    desc: '멋쟁이사자처럼 서강대학교 13기 운영진들이 직접 개발한 공식 사이트 입니다.',
    event: '공식 사이트 개발',
    img: 'https://i.imgur.com/acHf1v3.png',
    link: null
  },
  {
    id: 2,
    title: 'UNICON',
    year: 2024,
    tab: '12th',
    teamName: '야미원정대',
    PM: '정혜나, 임수연',
    DE: '김별',
    FE: '김경우, 김별',
    BE: '남기동, 정혜나',
    stack: 'React, Typescript, Django',
    desc: '서강대학교의 외국인 학생 수가 꾸준히 증가하고 있음에도 불구하고,외국인 학생들을 지원하는 서강대학교 내의 플랫폼과 서비스는부족한 상황입니다.외국인 학생들은 학교 생활에 필요한 정보를 얻는 데 어려움을 겪고 있으며 한국 학생들 역시 외국인 친구와 소통하고 싶어하지만 교류할 기회가 부족합니다.그래서, UNICON을 만들었습니다.',
    event: '데모데이',
    img: 'https://i.imgur.com/iEjYfQR.png',
    link: 'https://unicon-one.vercel.app/'
  },
  {
    id: 3,
    title: 'YouCheck',
    year: 2023,
    tab: '11th',
    teamName: '효자동개발자',
    PM: null,
    DE: null,
    FE: '이상연, 이선명',
    BE: '고유진, 김유이, 윤태호, 이건화',
    stack: 'React, Django',
    desc: 'One Click, More Check. 유튜브를 통한 정보 습득이 증가하면서, 유튜브를 통한 뉴스 이용에 대해 많은 우려가 생겼어요. 이에 팀 효자동개발자는 뉴미디어 리터러시가 낮아 유튜브 영상을 비판적으로 보기 어려운 사용자들이 다양한 의견에 노출되게 함으로써 사회 양극화를 막는 서비스를 개발했어요. 유튜브 링크를 붙여 넣기만 하면 해당 영상의 요약본과 관련 기사들을 비교할 수 있어, 영상과 관련된 정보를 쉽고 빠르게 찾아볼 수 있어요.',
    event: '전국 연합 해커톤',
    img: 'https://i.imgur.com/k2Tqe4B.png',
    link: null
  }
];

export const projectDetailData = (id: number) => {
  return projectsData.find((project) => project.id === id);
};
