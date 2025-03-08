import { Page, Result } from '@/pages/ApplyPage';
import SquareBtn from '../SquareBtn';

interface RoundOneResultProps {
  handlePageChange: (page: Page) => void;
  result: Result;
}

const formatDate = (dateTimeStr: string | undefined) => {
  if (dateTimeStr) {
    const date = new Date(dateTimeStr);
    return new Intl.DateTimeFormat('ko-KR', {
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
};

const RoundOneResult = ({ handlePageChange, result }: RoundOneResultProps) => {
  const handleNextBtn = () => {
    handlePageChange(Page.HOME);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <div className="flex flex-col gap-[2.4rem]">
        <p className="font-bold">
          {result.status === '서류합격'
            ? `축하합니다, ${result.name}님. 멋쟁이사자처럼 서강대학교 13기 1차 서류전형에 합격하셨습니다.`
            : `멋쟁이사자처럼 서강대학교에서 ${result.name}님의 1차 서류 결과를 안내 드립니다.`}
        </p>
        <p className="p-[1.2rem] border border-text-primary font-pretendard leading-[2.1rem]">
          {result.status === '서류합격' ? (
            <>
              {/* 안녕하세요, 멋쟁이사자처럼 서강대학교 13기 운영진입니다.
              <br />
              멋쟁이사자처럼 서강대학교 13기 1차 서류 합격을 축하드립니다!
              <br />
              <br />
              아래 공지 사항을 꼼꼼히 읽고 2차 면접 전형에 참여해주시기
              바랍니다.
              <br />
              <br />
              면접은 J609에서 이루어지며, {result.name}님의 면접 시간은{' '}
              {result.interviewStartTime} - {result.interviewEndTime}입니다.
              <br />
              지원자님의 간단한 질의를 위해 면접 시작 10분 전까지 면접장으로
              와주시기 바랍니다.
              <br />
              <br />
              감사합니다. */}
              안녕하세요, 멋쟁이사자처럼 서강대학교 13기 운영진입니다.
              <br />
              <br />
              13기 멋쟁이사자처럼 서강대학교 {result.track} 파트{' '}
              <strong>[서류 전형 합격]</strong> 을 축하드립니다. 🎉
              <br />
              <br />
              최종 면접 과정에 대한 안내드리겠습니다.
              <br />
              <br />
              ➡️ 진행 과정: 본인 확인 및 면접 안내 - 면접실 입장 - 면접 진행
              <br />
              📅 면접 장소 및 시간:{' '}
              <strong>
                J609 {formatDate(result.interviewStartTime)}{' '}
                {result.interviewStartTime?.slice(-5)} -{' '}
                {result.interviewEndTime?.slice(-5)}
              </strong>
              <br />
              <br />
              <br />
              <strong>📍면접 유의사항</strong>
              <br />
              <br />
              1. 면접 시간 <strong>15분 이전</strong>에 대기 부탁드립니다.
              면접에 관한 안내 사항 전달과 간단한 사전 조사 등이 진행됩니다.
              <br />
              2. 면접은 지원자 두 분이 함께 보시게 되며, <strong>15분</strong>
              간 진행됩니다.
              <br />
              3. 최종 합격/불합격 결과는 <strong>3월 14일</strong>{' '}
              멋쟁이사자처럼 서강대학교 공식 홈페이지(
              <a
                href="https://www.likelionsg13.site/recruit"
                target="_blank"
                className="border-b"
              >
                https://www.likelionsg13.site/recruit
              </a>
              )에서 확인 가능합니다. 해당 내용은 14일 인스타그램을 통해 다시 한
              번 공지될 예정입니다.
              <br />
              4. 보다 공정한 평가를 위해 면접과정을 녹화하고 있으며, 선발 종료
              후 모든 영상 자료는 폐기됩니다.
              <br />
              <br />
              <br />
              <strong>📍문의사항</strong>
              <br />
              <br />
              1. 대표 윤예은: 010-4126-8427
              <br />
              2. 인스타그램:{' '}
              <a
                href="https://www.instagram.com/likelion_sg/"
                target="_blank"
                className="border-b"
              >
                @likelion_sg
              </a>
              <br />
              <br />
              멋쟁이사자처럼 서강대학교 13기에 지원해주셔서 감사드리며, 다가올
              면접 때 뵙겠습니다!
            </>
          ) : (
            <>
              안녕하세요, 멋쟁이사자처럼 서강대학교 13기 운영진입니다.
              <br />
              멋쟁이사자처럼 서강대학교에 많은 관심을 보내주셔서 감사합니다.
              <br />
              <br />
              제한된 선발 인원으로 인해 이번에는 아쉽게도 좋은 소식을 전하지
              못하게 되었습니다.
              <br />
              좋은 역량을 가지신 분임에도 불구하고, 불합격 소식을 알려 드리게
              되어 무거운 마음입니다.
              <br />
              <br />
              귀한 시간 내어 지원해주셔서 감사드리고,
              <br /> 다음 기회에 더 좋은 인연으로 함께할 수 있기를 진심으로
              바라겠습니다.
              <br />
              <br />
              감사합니다.
            </>
          )}
        </p>
      </div>

      <SquareBtn
        content="1차 결과 확인 페이지로 돌아가기"
        handleClick={handleNextBtn}
        status="default"
      ></SquareBtn>
    </section>
  );
};

export default RoundOneResult;
