import styled from 'styled-components';

export const TransactionSection = styled.section`
    padding-top: 14px;
    padding-bottom: 14px;
`;

export const Table = styled.table`
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px;
    text-align: center;
`;

export const TableHead = styled.thead`
    height: 40px;
    color: #fff;
    background-color: #2196f3;
`;

export const TableBody = styled.tbody`
    background-color: #fff;
`;

export const TableRow = styled.tr`
    height: 40px;
    :nth-child(even) {
        background-color: #cacaca;
    }
`;