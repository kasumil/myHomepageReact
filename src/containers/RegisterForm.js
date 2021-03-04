import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, inintialForm } from "../modules/login";
import AuthView from "../components/common/AuthView";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ login }) => ({
    form: login.register
  }));

  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeInput({
        form: "register",
        key: name,
        value
      })
    );
  };



  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    // 구현 예정
  };



  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(inintialForm("register"));
  }, [dispatch]);

  return (
    <AuthView
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};



export default RegisterForm;