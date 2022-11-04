
import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import Accordion from "./Accordion";

export default function Content({ type, title, children }) {
  const {  setSelectedPost, setOpenPost,openPost } = useContext(Appcontext);

  function selectedFunction(){
    setSelectedPost(title);
    setOpenPost([...openPost,title])
  }

  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one,index) => (
        <Content {...one} key={index}/>
      ))}
    </Accordion>
  ) : (
    <div onClick={selectedFunction}>&nbsp;&nbsp;&nbsp;&nbsp;📝{title}</div>
  );
}
