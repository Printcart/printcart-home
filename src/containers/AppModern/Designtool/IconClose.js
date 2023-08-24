import styled from "styled-components";

const StyleIconClose = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-block;
  line-height: 1em;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: currentColor;
  vertical-align: middle;
`;

const IconClose = () => {
  return (
    <StyleIconClose viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
      ></path>
    </StyleIconClose>
  );
};

export default IconClose;
