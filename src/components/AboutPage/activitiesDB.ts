import { Activity } from '@/types/activity';
import image1 from '@/assets/image/AboutPage/activity/image1.jpg';
import image2 from '@/assets/image/AboutPage/activity/image2.png';
import image3 from '@/assets/image/AboutPage/activity/image3.jpg';
import image4 from '@/assets/image/AboutPage/activity/image4.png';
import image5 from '@/assets/image/AboutPage/activity/image5.jpg';

export const activityList: Activity[] = [
  {
    image: image1,
    name: 'Lion Sprint',
    description:
      "매주 월요일과 목요일에 오프라인 세션에서 웹 개발에 대해 배웁니다. 웹의 기초에 대해 함께 배운 후, 백엔드와 프론트엔드, 디자인 파트로 나뉘어 트랙별 심화 내용을 학습합니다. 또한 학습을 돕기 위해 멋쟁이사자처럼 온라인 강의 플랫폼 '테킷'의 강의를 무료로 제공합니다."
  },
  {
    image: image2,
    name: '아이디어톤',
    description:
      '아이디어톤은 창의적인 아이디어를 발굴하고 발전시키는 행사로, 참가자들이 팀을 이루어 협업하며 아이디어를 기획하고 발표합니다. 개발보다는 아이디어의 창의성과 실현 가능성에 중점을 두며, 기획력과 발표 역량을 향상시킬 수 있는 기회를 제공합니다. '
  },
  {
    image: image3,
    name: '전국 연합 해커톤',
    description:
      '1000명 이상이 참여하는 전국 단위 해커톤에 참가형 팀원들과 진행한 프로젝트를 제출하고 발표하는 멋쟁이사자처럼 대학의 최대 이벤트입니다.'
  },
  {
    image: image4,
    name: '신촌톤',
    description:
      '무박 2일간 진행되는 신촌 소재 대학들과 진행하는 해커톤입니다. 타 대학 학생들과 팀을 이뤄 서비스를 구현하고 발표합니다.'
  },
  {
    image: image5,
    name: '신촌 연합 데모데이',
    description:
      '신촌 소재 대학과 함께 진행하는 활동으로, 2학기 동안 프로젝트를 진행하고 발표하는 시간을 가집니다.'
  }
];
