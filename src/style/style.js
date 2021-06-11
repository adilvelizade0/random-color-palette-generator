import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;

  .palette {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .palette:hover {
    box-shadow: 0px 15px 42px -12px #a8b2c3;
    margin-bottom: 10px;
  }

  .palette:active {
    box-shadow: none;
    margin-bottom: 0;
  }

  .clipboard_div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin-right: 30px;
    padding: 0;
    border-radius: 15px;
  }

  .notification_div {
    transition: display 0.3s ease-in-out;
  }

  .btn-info {
    position: absolute;
    top: 600px;
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #0c1226;
  }
`;

const PaletteDiv = styled.div`
  width: 207px;
  height: 329px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 20px;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    color: #0c1226;
    mix-blend-mode: normal;
    opacity: 0.7;
  }
`;

const ColorDiv = styled.div`
  width: 187px;
  height: 251px;
  background: ${(props) => props.color || "#222"};
  border-radius: 5px;
`;

const NotifyDiv = styled.div`
  position: fixed;
  width: 420px;
  height: 58px;
  top: 30px;
  background: #0c1226;
  box-shadow: 0px 15px 42px -12px #a8b2c3;
  border-radius: 29px;
  display: none;
  justify-content: center;
  align-items: center;

  p {
    position: absolute;
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #e9e9ec;
  }
`;

const GenerateBtn = styled.button`
  background: #7e6cca;
  box-shadow: 0px 6px 20px -10px #7e6cca;
  border-radius: 5px;
  position: absolute;
  width: 393px;
  height: 68px;
  top: 530px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
`;

export { MainDiv, PaletteDiv, ColorDiv, NotifyDiv, GenerateBtn };
