import { cardinalList, MemberList } from './memberDB';

interface FirstSectionProps {
  selectedCardinal: number;
  onClickCardinal: (cardinal: number) => void;
}

export default function FirstSection({
  selectedCardinal,
  onClickCardinal
}: FirstSectionProps) {
  const memberData = MemberList[selectedCardinal];
  const currentCardinal = selectedCardinal === cardinalList[0];
  const isManager = typeof memberData[0] !== 'string';

  return (
    <section className="w-full max-w-[151.2rem]  py-[9.6rem] px-[1.2rem] gap-[2.4rem] flex justify-between max-md:flex-col">
      <div className="leftsection flex justify-between w-full max-md:flex-col">
        <div className="cardinal flex flex-col gap-[1.2rem] max-md:flex max-md:flex-row">
          {cardinalList.map((element, idx) => (
            <button
              key={idx}
              className={`cursor-pointer font-d2 text-[1.4rem] font-[700] text-surface-primary max-md:mb-[2.4rem] ${
                selectedCardinal === element ? 'opacity-100 ' : 'opacity-30 '
              }`}
              onClick={() => onClickCardinal(element)}
            >
              {element}th
            </button>
          ))}
        </div>
        <div className="Leader text-surface-primary font-d2 font-[700] line-height-[1.4] text-[1.4rem]">
          {isManager ? '운영진' : '멤버'}
        </div>
      </div>
      <div className="rightSection w-full text-surface-primary font-d2  line-height-[1.4] text-[1.4rem] pl-[1.2rem] max-md:pl-0">
        <div>
          {memberData.map((person, idx1) => (
            <div
              key={idx1}
              style={{ transition: 'none' }}
              className={`w-[22.025rem] flex font-[700] gap-[2rem] border-b-[1px] border-surface-primary first:border-t-[1px] first:pb-0 ${currentCardinal && 'first:border-b-[0px] py-[0.3rem]'}`}
            >
              {typeof person !== 'string' ? (
                <>
                  <div className="job w-[6rem]">{person.job}</div>
                  <div className="names w-full">
                    {person.names.map((name, idx2) => (
                      <div
                        key={idx2}
                        className="name w-full font-[400] not-first:pt-[0.3rem]"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-[0.3rem]">{person}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
