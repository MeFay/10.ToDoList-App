import styled from "styled-components";

export const StyledDiv = styled.div`
  font-size: 20px;
  background: linear-gradient(
    45deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(153, 217, 140, 1) 100%
  );
  color: white;
  border: 1px solid #76c893;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  column-gap: 5px;
  min-height: 600px;
  min-width: 500px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 20px;
  background: white;
  color: #168aad;
  border: 2px solid #76c893;
  width: 300px;
  border-radius: 5px;
`;

export const StyledOl = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLi = styled.li`
  font-weight: bold;
  padding: 15px;
  margin-bottom: 10px;
  align-items: center;
`;

export const StyledButton = styled.button`
  font-size: 20px;
  background: white;
  color: #168aad;
  border: 1px solid #76c893;
  border-radius: 5px;
  margin-left: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  background: white;
  color: #168aad;
  border: 1px solid #76c893;
  border-radius: 5px;
  padding: 10px;
`;
