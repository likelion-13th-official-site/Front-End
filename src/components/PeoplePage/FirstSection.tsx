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
    <section className="w-full gap-[1.6rem] flex  justify-between flex-col">
      <div className="leftsection flex justify-between w-full flex-col">
        <div className="cardinal gap-[1.2rem] flex items-center font-d2 text-[1.4rem] text-text-primary mb-[6.4rem]">
          <span className="opacity-30">SHOW: </span>
          {cardinalList.map((element, idx) => (
            <button
              key={idx}
              className={`cursor-pointer font-d2 text-[1.4rem] font-[700] text-text-primary max-md:mb-[2.4rem] ${
                selectedCardinal === element ? 'opacity-100 ' : 'opacity-30 '
              }`}
              onClick={() => onClickCardinal(element)}
            >
              {element}th
            </button>
          ))}
        </div>
        <div className="Leader text-text-primary font-d2 font-[700] line-height-[1.4] text-[1.4rem]">
          {isManager ? '운영진' : '멤버'}
        </div>
      </div>
      <div
        className={`rightSection w-full text-text-primary font-d2  line-height-[1.4] text-[1.4rem] max-md:pl-0 ${currentCardinal ? '' : 'border-text-primary border-b-[1px]  border-t-[1px]'}`}
      >
        <div
          className={`${currentCardinal ? '' : 'grid grid-cols-4 max-2xl:grid-cols-6 max-md:grid-cols-4'}`}
        >
          {memberData.map((person, idx1) => (
            <div
              key={idx1}
              style={{ transition: 'none' }}
              className={`w-full flex font-[700] gap-[2rem]  text-text-primary first:pb-0 ${currentCardinal && 'first:border-b-[0px] py-[0.4rem] border-b-[1px] first:border-t-[1px]'}`}
            >
              {typeof person !== 'string' ? (
                <>
                  <div className="job w-full">{person.job}</div>
                  <div className="names w-full">
                    {person.names.map((name, idx2) => (
                      <div
                        key={idx2}
                        className="name w-full font-[400] not-first:pt-[0.4rem] "
                      >
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-[0.4rem] font-[400]">{person}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
