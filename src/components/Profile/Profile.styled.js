import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 350px;
    padding-top: 12px;
    margin-left: auto;
    margin-right: auto;

    border-radius: ${p => p.theme.radii.primary}px;
    box-shadow: ${p => p.theme.shadows.shadow};
    background-color: ${p => p.theme.colors.background};
    overflow: hidden;
`;

export const DescriptionContainer = styled.div`
    text-align: center;
`;

export const Image = styled.img`
    display: inline-block;
    width: 200px;
    margin-bottom: 8px;
`;

export const DescriptionTxt = styled.p`
    margin-bottom: 8px;
    color: #757575;
`;

export const DescriptionTxtName = styled.p`
    margin-bottom: 8px;
    
    font-size: 24px;
    font-weight: 700;
`;

export const List = styled.ul`
    display: flex;
    background-color: ${p => p.theme.colors.primary};
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
    padding: 20px 0;
    font-size: 14px; 
`;

export const ListItemLabel = styled.span`
    margin-bottom: 4px;
`;

export const ListItemQuantity = styled.span`
    font-weight: 700;
`;
