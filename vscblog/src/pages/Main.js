import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Accordion from "../components/Accordion";
import Content from "../components/Content";
import Appcontext from "../context/Appcontext";

function Main() {
  const [selected, setSelected] = useState(null);
  const {selectedPost,postData,openPost} = useContext(Appcontext);


  const listArr = [
    {
      icon: <HiOutlineDocument size={24} />,
      path: "EXPLORER",
      content: (
        <>
          <Accordion title="OPEN POSTS" isBold={true}>
            내요요요옹
          </Accordion>
          <Accordion title="VSCODE" isBold={true}>
            {postData.map((one,index) => (
              <Content {...one}key={index} />
            ))}
          </Accordion>
        </>
      ),
    },
    {
      icon: <AiOutlineSearch size={24} />,
      path: "SEARCH",
      content: <p>111</p>,
    },
  ];

  return (
    <Wrap>
      <LeftBar>
        {listArr.map((one, index) => (
          <IconWrap
            selected={selected === index}
            onClick={() => {
              setSelected(selected === index ? null : index);
            }}
            key={index}
          >
            {one.icon}
          </IconWrap>
        ))}
      </LeftBar>

      {selected !== null && listArr[selected] && (
        <LeftContent>
          <p>{listArr[selected].path}</p>
          {listArr[selected].content}
        </LeftContent>
      )}
      <RightContent selected={selected}>
        <div>
          {openPost.map((one) => {
            const patharr = one.split("/").filter(Boolean);

            const data = patharr.reduce(
              (sum,current,index) => {
              const lastPath = patharr.length - 1 === index;
              

              const target = sum.find(
                (one) => 
                one.title === current &&
                one.type === (lastPath ? "post" : "directory")
              );
              return lastPath ? target : target?.children
            }, postData)

            console.log(data);

            return <div className={selectedPost === one ? "selected" : ""}>{data.title}</div>;
        })}
        </div>
        {/* {JSON.stringify(openPost)} */}
        {selectedPost}
        </RightContent> 
    </Wrap>
  );
}

export default Main;


const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
  
  border-left: ${({ selected }) => (selected ? 2 : 0)}px solid white;
  
  > svg {
    color: ${({ selected }) => (selected ? "white" : "#7a7a7a")};
  }
  `;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  `;

const LeftBar = styled.div`
  width: 50px;
  min-width: 50px;
  height: 100%;
  background-color: #333333;
  `;

const LeftContent = styled.div`
  width: 320px;
  min-width: 320px;
  height: 100%;
  background-color: #252526;
  padding: 10px;
  
  > p {
    padding-bottom: 10px;
    color: #7a7a7a;
  }
  
  @media(max-width: 540px){
    width: 100%;
  }
  `;

  const RightContent = styled.div`
    background-color: #1e1e1e;
    width: 100%;
    @media(max-width: 520px){
      display: ${({selected}) => (selected === null ? "block" : "none")};
    }
    >div:first-child{
      display: flex;
      >div{
        width: 150px;
        padding: 5px 10px;
        background-color: #333333;
        border-right:2px solid #1e1e1e;

        &.selected {
          background-color: #1e1e1e;
        }
      }
    }

  `;