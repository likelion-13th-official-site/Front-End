import { companyList } from './companyList';

export default function SeventhSection() {
  return (
    <section className="w-full max-w-[151.2rem] px-[1.2rem] py-[9.6rem]  font-d2 text-[1.4rem] text-text-primary font-[400]">
      <div className="flex gap-[2.4rem] border-t-text-primary border-t-[1px]">
        <div className="leftSection w-full h-full flex py-[2.4rem]">
          <div className="w-full max-md:hidden"></div>
          <div className="pop w-full leading-[1.4] text-[1.4rem] ">
            <div className="pb-[1.3rem] font-[700]">From Likelion Sogang</div>
            <div>
              멋쟁이사자처럼 서강대학교 알럼나이들의 Possibility to Reality.
            </div>
          </div>
        </div>

        <div className="rightSection w-full pl-[1.2rem] max-md:hidden py-[2.4rem]">
          <div>
            <div className="pop leading-[1.4] text-[1.4rem]">
              <div className="font-[700] pb-[1.6rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel flex relative overflow-hidden h-[11.2rem] items-center">
        <ul className="flex h-full animate-[scrolling1_20s_linear_infinite] w-max absolute">
          {companyList.map((CompantIcon, idx) => (
            <li
              key={idx}
              className=" flex items-center justify-center py-[4rem] px-[4.8rem] flex-shrink-0"
            >
              <CompantIcon className="h-[3.2rem] object-cover" />
            </li>
          ))}
        </ul>

        <ul
          className="flex h-full animate-[scrolling2_20s_linear_infinite] w-max absolute"
          aria-hidden="true"
        >
          {companyList.map((CompantIcon, idx) => (
            <li
              key={idx}
              className=" flex items-center justify-center py-[4rem] px-[4.8rem] flex-shrink-0"
            >
              <CompantIcon className="h-[3.2rem] object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
