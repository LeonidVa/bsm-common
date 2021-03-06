import styled from 'styled-components';

export const ModalSale = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  top: 0;
  left: 0;
  font-size: 1em;
  z-index: 5;
`;

export const BodyWhite = styled.div`
  background: #fff;
  border: 2px solid #d84315;
`;

export const FormAlert = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4A4A4A;
`;

export const BlockFormTitle = styled.p`
  font-size: 2em;
`;

export const ModalSaleBody = styled.div`
  position: relative;
  width: 34.18em;
  max-width: 100%;
  left: 50%;
  top: 50%;
  margin-left: -17.09em;
  transform: translateY(-50%);
  padding: 1.5em 2.18em 2.5em;
  background-color: #FF8A65;
  background-size: cover;
  background-position: 50% 0%;
  font-size: 1em;
  @media (max-width: 550px) {
    width: 100%;
    left: 0;
    margin-left: 0;
    font-size: .8em;
  }
  @media (max-width: 420px) {
    font-size: .7em;
  }
  @media (max-width: 370px) {
    font-size: .6em;
  }
`;

export const ErrorImage = styled.img`
  margin: 10px;
  width: 100%;
  margin-right: 35px;
`;

export const ErrorSubtitle = styled.p`
  font-size: 2rem;
`;