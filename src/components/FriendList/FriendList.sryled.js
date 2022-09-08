import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12px;
    width: 180px;

    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.primary}px;
    box-shadow: ${p => p.theme.shadows.shadow};
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px;
    width: 90%;

    background-color: ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.primary}px;
    box-shadow: ${p => p.theme.shadows.shadow};

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
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
    margin-right: 12px;
`;

export const FriedName = styled.p`
    font-weight: 500;
`;