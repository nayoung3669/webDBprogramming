import styled from "styled-components";
import theme from "../../lib/styles/theme";

const HeaderBlock = styled.div`
  display: flex;
  top: 0;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 75px;
  padding: 10px 60px;
  background-color: ${theme.whiteColor};
  border-bottom: 2px solid ${theme.lightGrayColor};

  .logo {
    width: 140px;
    min-width: 80px;
    height: 60px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .nav {
    ${theme.flexCenter}
    position: relative;
    button {
      font-weight: 400;
      border-radius: 3px;
    }
    .search {
      @media screen and (max-width: ${theme.breakpoints.tablet}) {
        display: none;
      }
    }
    input {
      padding-left: 45px;
      border: 2.125px solid ${theme.lightGrayColor};
      &:hover {
        background-color: ${theme.lightGrayColor};
      }
      &::placeholder {
        color: #bebebe;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: 5px;
  }
`;

export default HeaderBlock;
