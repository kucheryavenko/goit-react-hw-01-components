import styled from 'styled-components';

export const Table = styled.table`
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px;
    text-align: center;
`;

export const TableHead = styled.thead`
    height: 40px;
    color: ${p => p.theme.colors.txt};
    background-color: ${p => p.theme.colors.accent};;
`;

export const TableBody = styled.tbody`
    background-color: ${p => p.theme.colors.background};
`;

export const TableRow = styled.tr`
    height: 40px;
    :nth-child(even) {
        background-color: ${p => p.theme.colors.primary};
    }
`;