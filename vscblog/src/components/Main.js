import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

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
              setSelected(index);
            }}
          >
            {one.icon}
          </IconWrap>
        ))}
      </LeftBar>
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  height: 100vh;
  background-color: white;
`;

const LeftBar = styled.div`
  width: 50px;
  height: 100vh;
  background-color: #333333;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;

  > svg {
    color: ${({ selected }) => (selected ? "white" : "#a7a7a7a")};
  }
`;