import { Page } from '@/pages/ApplyPage';
import { useState } from 'react';
import SquareBtn from '../SquareBtn';

interface ApplyFirstProps {
  handlePageChange: (page: Page) => void;
}

interface IsChecked {
  first: boolean;
  second: boolean;
}

const ApplyFirst = ({ handlePageChange }: ApplyFirstProps) => {
  const [isChecked, setIsChecked] = useState<IsChecked>({
    first: false,
    second: false
  });

  const handleNextBtn = () => {
    //API call
    handlePageChange(Page.APPLY_SECOND);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]">
      <p className="font-[500] p-[1.2rem] border border-text-primary font-pretendard leading-[2.1rem] break-words">
        <span className="font-[700]">
          🦁 멋쟁이사자처럼 서강대학교 13기 모집 안내 🦁
        </span>

        <p>
          안녕하세요! <strong>멋쟁이사자처럼 서강대학교</strong>
          입니다.
        </p>

        <p>
          멋쟁이사자처럼은 코딩을 처음 배우는 사람들도 쉽게 웹 개발을 익히고,
          창의적인 프로젝트를 함께 만들어가는 전국 대학 연합 IT 동아리입니다.
        </p>

        <p>
          "<strong>POSSIBILITY TO REALITY</strong>"라는 목표 아래,
          멋쟁이사자처럼은 다양한 프로젝트와 실전 경험을 바탕으로{' '}
          <strong>함께 성장하는 환경</strong>을 제공합니다.
        </p>

        <p>
          프로그래밍을 처음 접하는 분들도, 개발 경험이 있는 분들도 모두
          환영합니다!
        </p>

        <p>
          💡 <strong>"내 아이디어를 실제 서비스로 만들어 보고 싶다면?"</strong>
        </p>

        <p>
          💡 <strong>"같은 목표를 가진 사람들과 함께 성장하고 싶다면?"</strong>
        </p>

        <p>
          💡 <strong>"코딩을 배워 나만의 포트폴리오를 만들고 싶다면?"</strong>
        </p>

        <p>
          지금 바로 <strong>멋쟁이사자처럼 서강대학교 13기</strong>에
          도전하세요!
        </p>

        <p>
          아래 지원 안내 및 선발 일정을 참고하여{' '}
          <strong>멋쟁이사자처럼과 함께할 준비</strong>를 해 주세요. 🚀
        </p>
<br/>
        <p>
          <strong>1. 지원 안내</strong>
        </p>
        <p>
          a. 제출 버튼을 누른 후에도 서류 마감 기한 전까지는 지원 페이지에서
          수정이 가능합니다.
        </p>
        <p>
          b. 지원서는 다음과 같은 구성으로 되어있습니다. 모든 사항을 빠짐없이
          작성 바랍니다.
        </p>
        <p> i. 안내 사항 동의</p>
        <p> ii. 인적사항 기입</p>
        <p> iii. 자기소개서 제출 및 면접 가능 시간 선택</p>
        <br/>
        <p>
          <strong>2. 면접 촬영 및 개인정보 수집 안내</strong>
        </p>
        <p>
          a. 면접은 대면으로 진행되며, 공정한 면접 평가를 위해 면접 내용을 촬영
          및 수집할 예정입니다. 수집한 면접 영상은 선발 과정에서만 활용되며,
          최종 선발 이후 즉시 폐기됩니다.
        </p>
        <br/>
        <p>
          <strong>3. 선발 일정 안내</strong>
        </p>
        <p>a. 서류 지원 마감일 : 2025-02-18 ~ 2025-03-06</p>
        <p>b. 서류 합격 발표일 : 2025-03-08 ~ 2025-03-09</p>
        <p>c. 면접 평가 : 2025-03-10 ~ 2025-03-12</p>
        <p>d. 최종 합격 발표일 : 2025-03-14</p>
        <p>e. OT : 2025-03-17</p>
        <br/>
        <p>
          <strong>4. 공식 홈페이지, 인스타그램</strong>
        </p>
        <p>
          a. 서강대학교 멋쟁이사자처럼 공식 홈페이지와 @likelion_sg 공식
          인스타그램에서 커리큘럼, 활동 일정 등 다양한 정보를 확인하실 수
          있습니다.
        </p>
        <br/>
        <p>
          <strong>5. 문의사항</strong>
        </p>
        <p>a. 대표 윤예은: 010-4126-8427</p>
        <p>b. 인스타그램: @likelion_sogang</p>
      </p>
      <div className="flex flex-col gap-[1.2rem]">
        <div className="flex justify-between items-center">
          <span>위 내용을 꼼꼼히 읽어보셨나요?</span>
          <input
            type="checkbox"
            className="appearance-none w-[1.6rem] h-[1.6rem] border border-secondary hover:border-[2px] hover:border-text-primary   checked:border-text-primary checked:bg-text-primary checked:bg-[url('./assets/image/check_icon.svg')] checked:bg-no-repeat checked:bg-center"
            onChange={() =>
              setIsChecked({ ...isChecked, first: !isChecked.first })
            }
          ></input>
        </div>
        <div className="flex justify-between items-center">
          <span>멋쟁이사자처럼 서강대학교의 모든 활동에 참여 가능한가요?</span>
          <input
            type="checkbox"
            className="appearance-none w-[1.6rem] h-[1.6rem] border border-secondary hover:border-[2px] hover:border-text-primary   checked:border-text-primary checked:bg-text-primary checked:bg-[url('./assets/image/check_icon.svg')] checked:bg-no-repeat checked:bg-center"
            onChange={() =>
              setIsChecked({ ...isChecked, second: !isChecked.second })
            }
          ></input>
        </div>
      </div>

      <SquareBtn
        content="다음"
        handleClick={handleNextBtn}
        status={
          isChecked.first === true && isChecked.second === true
            ? 'default'
            : 'disabled'
        }
      ></SquareBtn>
    </section>
  );
};

export default ApplyFirst;
