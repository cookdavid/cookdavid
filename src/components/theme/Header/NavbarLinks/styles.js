import styled from 'styled-components'

export const Links = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;

    &.current {
      color: #212121;
    }

    ${({ theme }) =>
      theme === 'dark' &&
      `
            color: #fff;
            &.current {
                color: #929090;
            }
        `}
  }

  ${({ desktop }) =>
    desktop
      ? `
        @media (max-width: 960px) {
            display: none;
        }

        a {
            margin-right: 1rem;

            &:last-child {
                margin-right: unset;
            }
        }
    `
      : `
        padding: 3rem;
        display: flex;
        flex-direction: column;

        a {
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: unset;
            }
        }
    `}
`
