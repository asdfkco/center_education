import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Accordion from "./Accordion";

const listArr = [
  {
    icon: <HiOutlineDocument size={24} />,
    path: "post",
  },
  {
    icon: <AiOutlineSearch size={24} />,
    path: "test",
  },
];

function Main() {
  const [selected, setSelected] = useState(0);

  return (
    <Wrap>
      <LeftBar>
        {listArr.map((one, index) => (
          <IconWrap
            selected={selected === index}
            onClick={() => {
              setSelected(selected === index ? null : index);
            }}
          >
            {one.icon}
          </IconWrap>
        ))}
      </LeftBar>
      <LeftContent>
        <p>{listArr[selected]?.path}</p>
        <Accordion title="OPEN POSTS">내요오오오오오옹으시안</Accordion>

      </LeftContent>
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
`;


const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;


  border-left: ${({ selected }) => (selected ? "2px" : "0px")} solid white;
  
  > svg {
    color: ${({ selected }) => (selected ? "white" : "#a7a7a7a")};
  }
`;

const LeftBar = styled.div`
  width: 50px;
  height: 100vh;
  background-color: #333333;
`;
  
const LeftContent = styled.div`
  width: 320px;
  height: 100%;
  background-color: #252526;
  > p{
    padding: 15px 0 0 10px;
    color: #a7a7a7;
  }
`;
