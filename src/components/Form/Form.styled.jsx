import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 563px;
  margin-left: 147px;
  margin-top: 179px;
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const FieldInput = styled(Field)`
  width: 557px;
  height: 93px;
  margin-bottom: 8px;

  background: #ffffff;
  border: 1px solid #dcdcdc;
  color: #3e3e3e;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fc842d;
  }
  :checked::before {
    transform: scale(1);
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #fc842d;
  }
`;

export const FieldMessage = styled(Field)`
  /* box-sizing: border-box; */

  width: 557px;
  height: 189px;

  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fc842d;
  }
  :checked::before {
    transform: scale(1);
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #fc842d;
  }
`;

export const Title = styled.h1`
  width: 563px;
  height: 58px;

  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;

  color: #3e3e3e;
`;

export const Button = styled.button`
  width: 218px;
  height: 73px;
  margin-top: 23px;

  background: #fad34f;
  border-radius: 500px;
  border: none;
  cursor: pointer;

  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;

  :hover:focus {
    color: #ffffff;
    background-color: #fad34f;
    box-shadow: 0px 4px 10px rgba(255, 153, 0, 0.5);
    border: 20px #ffc400;
    border-radius: 500px;
    /* border: transparent; */
    transform: scale(1.1);
  }
`;

export const ErrorText = styled.p`
  color: red;
`;
