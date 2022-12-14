import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-900']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    padding: 1rem;
    cursor: pointer;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    transition: all 0.2s;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme['green-500']};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
