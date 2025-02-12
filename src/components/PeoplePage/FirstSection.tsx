import React from 'react';
import { cardinalList, MemberList } from './memberDB';

interface FirstSectionProps {
  selectedCardinal: number;
  onClickCardinal: (cardinal: number) => void;
}

export default function FirstSection({
  selectedCardinal,
  onClickCardinal
}: FirstSectionProps) {
  return (
    <section className="max-w-[240rem]  bg-amber-500 mt-[4.7rem] py-[9.6rem] px-[1.2rem] gap-[2.4rem] flex justify-between max-md:flex-col">
      <div className="leftsection flex justify-between w-full max-md:flex-col">
        <div className="cardinal flex flex-col gap-[1.2rem] max-md:flex max-md:flex-row">
          {cardinalList.map((element, idx) => (
            <button
              key={idx}
              className={`transition-all cursor-pointer font-d2 text-[1.4rem] font-[700] text-surface-primary max-md:mb-[2.4rem] ${
                selectedCardinal === element
                  ? 'opacity-100 ease-in duration-1000 delay-1000'
                  : 'opacity-30 ease-out duration-1000 delay-1000'
              }`}
              onClick={() => onClickCardinal(element)}
            >
              {element}th
            </button>
          ))}
        </div>
        <div className="Leader text-surface-primary font-d2 font-[700] line-height-[1.4] text-[1.4rem]">
          {typeof MemberList[selectedCardinal][0] !== 'string'
            ? '운영진'
            : '멤버'}
        </div>
      </div>
      <div className="rightSection w-full text-surface-primary font-d2  line-height-[1.4] text-[1.4rem] pl-[1.2rem] max-md:pl-0">
        <div>
          {MemberList[selectedCardinal].map((item, idx1) => (
            <div
              key={idx1}
              className={`w-[22.025rem] flex font-[700] gap-[2rem] border-b-[1px] py-[0.3rem] border-surface-primary first:border-t-[1px] ${selectedCardinal === cardinalList[0] && 'first:border-b-[0px] '}`}
            >
              {typeof item !== 'string' ? (
                <>
                  <div className="job w-[6rem]">{item.job}</div>
                  <div className="names w-full">
                    {item.names.map((name, idx2) => (
                      <div key={idx2} className="name w-full font-[400]">
                        {name}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div>{item}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
