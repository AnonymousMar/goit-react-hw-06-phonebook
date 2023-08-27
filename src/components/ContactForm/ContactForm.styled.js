import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
    flex-direction: column;
`;

export const InputStyle = styled.input`
   width: 340px;
        height: 36px;
        vertical-align: middle;
        font-size: 18px;
        margin-top: 4px;
        border-radius: 4px;
`;
export const Label = styled.label`
   font-size: 22px;
    padding: 8px;
    display: flex;
    flex-direction: column;
`;

export const ButtonStyle = styled.button`
  position: relative;
        display: inline-block;
    
        margin-top: 40px;
        padding: 8px 15px;
        color: #03e9f4;
        background-color: rgba(199, 192, 192, 0.72);
        font-size: 16px;
        font-family: sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        letter-spacing: 3px;
    
        transition: color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
            background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
            box-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
            border-radius 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;