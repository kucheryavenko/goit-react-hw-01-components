import styled from 'styled-components';

export const FriedSection = styled.section`
    padding-top: 14px;
    padding-bottom: 14px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12px;
    width: 180px;

    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background-color: #f5f4fa;
    border-radius: 16px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    width: 90%;
    padding: 8px;

    :last-child {
        margin-bottom: 0;
    }
`;

export const Status = styled.span`
display: block;
width: 12px;
height: 12px;
margin-right: 12px;
border-radius: 50%;
border: 1px solid black;
background-color: ${p => p.isOnline ? 'green' : 'red'};
`;
export const Avatar = styled.img`
margin-right: 12px;
`;

export const FriedName = styled.p`
font-weight: 500;
`;