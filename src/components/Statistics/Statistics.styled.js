import styled from 'styled-components';

export const StatSection = styled.section`
    padding-top: 14px;
    padding-bottom: 14px;
`;

export const StatContainer = styled.div`
    width: 450px;
    padding-top: 24px;
    margin-left: auto;
    margin-right: auto;
    
    text-align: center;
    border-radius: 16px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    background-color: #fff;
    overflow: hidden;
`;

export const Title = styled.h2`
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 700;
`;

export const List = styled.ul`
    display: flex;
    background-color: #2196f3;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 5);
    padding: 16px 0;
    
    font-size: 20px; 
    color: #fff;
`;

export const ListItemLabel = styled.span`
    margin-bottom: 8px;
`;