import React, { useEffect, useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import { Application, Page, Result } from '@/pages/ApplyPage';
import { instance } from '@/api/instance';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

interface HomeProps {
  handlePageChange: (page: Page) => void;
  setApplicationData: (data: Application) => void;
  handleToastRender: (text: string) => void;
  setEditStatus: (isEdit: boolean) => void;
  setResultData: (data: Result) => void;
}

const Home = ({
  handlePageChange,
  setApplicationData,
  handleToastRender,
  setEditStatus,
  setResultData
}: HomeProps) => {
  const [roundNum, setRoundNum] = useState<
    'apply' | 'one' | 'two' | 'forbidden'
  >('apply');
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const recruitDoneDate = new Date(now.getFullYear(), 2, 7, 0, 0, 0);
    const roundOneAnnounceDate = new Date(now.getFullYear(), 2, 8, 12, 0, 0);
    const roundTwoAnnounceDate = new Date(now.getFullYear(), 2, 14, 20, 0, 0);
    if (now < recruitDoneDate) setRoundNum('apply');
    else if (now >= recruitDoneDate && now < roundOneAnnounceDate) {
      setRoundNum('forbidden');
      alert('현재는 지원 접수 기간이 아닙니다.');
      navigate('/');
    } else if (now >= roundOneAnnounceDate && now < roundTwoAnnounceDate)
      setRoundNum('one');
    else setRoundNum('two');
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'EMAIL':
        setLoginData({ ...loginData, email: e.target.value });
        break;
      case 'PASSWORD':
        setLoginData({ ...loginData, password: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleRedirectBtn = async () => {
    if (roundNum === 'apply') {
      if (isPending) return;
      try {
        setIsPending(true);
        const body = { ...loginData };
        const res = await instance.post('/application/view', body);
        if (res?.data?.success) {
          const { id, ...newData } = res.data.data;
          newData.password = loginData.password;
          setApplicationData(newData);
          // localStorage.setItem('isEdit', 'true');
          setEditStatus(true); // 지원서의 status를 edit로 설정
          setLoginData({ email: '', password: '' });
          handlePageChange(Page.APPLY_SECOND);
        }
      } catch (err: unknown) {
        if (
          err instanceof AxiosError &&
          err?.response?.status &&
          err?.response?.status >= 400
        ) {
          handleToastRender(err.response.data.message);
        }
      } finally {
        setIsPending(false);
      }
    } else {
      if (isPending) return;
      try {
        setIsPending(true);
        const body = { ...loginData };
        const endPoint =
          roundNum === 'one' ? '/result/document' : '/result/final';
        const res = await instance.post(endPoint, body);
        if (res?.data?.success) {
          setResultData(res.data.data);
          setLoginData({ email: '', password: '' });
          handlePageChange(
            roundNum === 'one' ? Page.ROUND_ONE_RESULT : Page.ROUND_TWO_RESULT
          );
        }
      } catch (err: unknown) {
        if (
          err instanceof AxiosError &&
          err?.response?.status &&
          err?.response?.status >= 400
        ) {
          handleToastRender(err.response.data.message);
        }
      } finally {
        setIsPending(false);
      }
    }
  };

  const handleFindPWBtn = () => {
    setLoginData({ email: '', password: '' });
    handlePageChange(Page.FIND_PW_EMAIL);
  };

  const handleCreateBtn = () => {
    setLoginData({ email: '', password: '' });
    // localStorage.setItem('isEdit', 'false');
    setEditStatus(false); // 지원서의 status를 create로 설정
    handlePageChange(Page.APPLY_FIRST);
  };

  return (
    <section className="flex flex-col gap-[8rem] text-[1.4rem]  ">
      {roundNum === 'apply' && (
        <div className="flex flex-col gap-[1.2rem]">
          <p className="font-bold">처음 지원서를 작성하신다면,</p>
          <SquareBtn
            content="지원서 생성하기"
            handleClick={handleCreateBtn}
            status="default"
          ></SquareBtn>
        </div>
      )}

      <div className="flex flex-col gap-[4.8rem]">
        <p className="font-bold">
          {roundNum === 'apply'
            ? '이미 작성하던 지원서가 있으시다면,'
            : roundNum === 'one'
              ? '1차 결과 확인하기'
              : '최종 결과 확인하기'}
        </p>
        <FormBox
          name={'EMAIL'}
          title={'EMAIL'}
          handleChange={handleInput}
          isError={false}
          isExplanation={false}
          placeholder=""
        ></FormBox>
        <FormBox
          title={'PASSWORD'}
          name={'PASSWORD'}
          handleChange={handleInput}
          isError={false}
          isExplanation={false}
          placeholder=""
          inputType="password"
        ></FormBox>
        <SquareBtn
          content={roundNum === 'apply' ? '지원서 수정하기' : '결과 확인'}
          handleClick={handleRedirectBtn}
          status={
            loginData.email === '' || loginData.password === ''
              ? 'disabled'
              : 'default'
          }
        ></SquareBtn>
        <div className="flex justify-center">
          <button
            className="text-center underline cursor-pointer hover:text-text-secondary w-auto"
            onClick={handleFindPWBtn}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
