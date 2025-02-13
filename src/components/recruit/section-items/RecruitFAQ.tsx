import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const faqList = [
  {
    question: '전공자만 지원할 수 있나요?',
    answer: '아니요, 전공자뿐만 아니라 비전공자도 지원 가능합니다.'
  },
  {
    question: '어떤 것을 배우나요?',
    answer:
      '프론트엔드, 백엔드, 데이터베이스, 네트워크, 알고리즘 등의 기초 지식부터 시작하여, 실제 프로젝트를 진행하며 협업하는 방법, 협업 도구 사용법, 코드 리뷰 등을 배울 수 있습니다.'
  },
  {
    question: '프로그래밍과 개발을 잘 모르는데 괜찮나요?',
    answer:
      '네, 괜찮습니다. 프로그래밍과 개발을 잘 모르는 것을 전제로 진행되며, 프로그래밍을 처음 배우는 사람들을 위한 교육 커리큘럼이 준비되어 있습니다.'
  },
  {
    question: '면접은 어떤 방식으로 진행되나요?',
    answer:
      '서류 전형을 통과한 지원자에게는 온라인 코딩 테스트를 진행하며, 코딩 테스트를 통과한 지원자에게는 면접을 진행합니다.'
  },
  {
    question: '1년 내내 참가해야 하나요?',
    answer: '아니요, 1학기 또는 2학기 중 하나만 참가하셔도 됩니다.'
  },
  {
    question: '2학기에도 모집하나요?',
    answer: '네, 2학기에도 모집을 진행합니다.'
  }
];

const firstLine = {
  flat: {
    d: 'M 4 14 L 24 14',
    transition: {
      duration: 0.3
    }
  },
  closed: {
    d: 'M 14 4 L 14 24',
    transition: {
      duration: 0.3
    }
  }
};

const secondLine = {
  flat: {
    d: 'M 4 14 L 24 14',
    transition: {
      duration: 0.3
    }
  },
  closed: {
    d: 'M 4 14 L 24 14',
    transition: {
      duration: 0.3
    }
  }
};

export default function RecruitFAQ() {
  const [checkedList, setCheckedList] = useState<boolean[]>(
    Array(faqList.length).fill(false)
  );

  const handleCheck = (idx: number) => {
    setCheckedList((prev) => {
      const newList = [...prev];
      newList[idx] = !newList[idx];
      return newList;
    });
  };

  return (
    <div
      id="faq-section"
      className="w-full pl-[1.2rem] flex flex-col gap-[1.6rem]"
    >
      <h1 className="text-[1.4rem] font-[900] leading-[140%]">
        자주 묻는 질문
      </h1>
      <div
        id="faq-list"
        className="w-full flex flex-col border-t border-text-primary"
      >
        {faqList.map((faq, idx) => (
          <label
            key={idx}
            htmlFor={`faq-label-${idx}`}
            className="pb-[2.4rem] border-b"
          >
            <div id="faq-box" className="w-full py-[0.4rem]">
              <input
                id={`faq-label-${idx}`}
                type="checkbox"
                className="hidden peer"
                onClick={() => handleCheck(idx)}
              />
              <div className="group w-full flex justify-between items-center cursor-pointer text-[1.4rem] font-[900] leading-[140%]">
                <span>{faq.question}</span>
                {/* <span className="">{checkedList[idx] ? '-' : '+'}</span> */}
                <span>
                  <motion.svg
                    className="svg--menu scale-50"
                    width="28"
                    height="28"
                  >
                    <motion.path
                      variants={firstLine}
                      initial="closed"
                      animate={checkedList[idx] ? 'flat' : 'closed'}
                      fill="transparent"
                      strokeWidth="2.5"
                      stroke="var(--color-text-primary)"
                    ></motion.path>
                    <motion.path
                      variants={secondLine}
                      initial="flat"
                      animate={checkedList[idx] ? 'flat' : 'closed'}
                      fill="transparent"
                      strokeWidth="2.5"
                      stroke="var(--color-text-primary)"
                    ></motion.path>
                  </motion.svg>
                </span>
              </div>
              <AnimatePresence>
                {checkedList[idx] && (
                  <motion.div
                    className="pt-[0.4rem] text-[1.4rem] font-[400] leading-[140%] overflow-hidden"
                    initial={{ maxHeight: 0 }}
                    animate={{ maxHeight: '20rem' }}
                    exit={{ maxHeight: 0 }}
                    transition={{ ease: 'easeOut' }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
