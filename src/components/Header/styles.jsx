import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 0 30px;
`