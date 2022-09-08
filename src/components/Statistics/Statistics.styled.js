import styled from 'styled-components';

export const StatContainer = styled.div`
    width: 450px;
    padding-top: 24px;
    margin-left: auto;
    margin-right: auto;
    
    text-align: center;
    border-radius: ${p => p.theme.radii.primary}px;
    box-shadow: ${p => p.theme.shadows.shadow};
    background-color: ${p => p.theme.colors.background};
    overflow: hidden;
`;

export const Title = styled.h2`
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 700;
`;

export const List = styled.ul`
    display: flex;
    background-color: ${p => p.theme.colors.accent};
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 5);
    padding: 16px 0;
    
    font-size: 20px; 
    color: ${p => p.theme.colors.txt};
`;

export const ListItemLabel = styled.span`
    margin-bottom: 8px;
`;