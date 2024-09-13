import React from 'react'
import Icon from '@ant-design/icons'

const SvgDiscord = () => (
  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='16' cy='16' r='16' fill='#8C9EFF' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23.7572 9.92C23.7572 9.92 21.5337 8.1968 18.9088 8L18.6722 8.46896C21.045 9.04448 22.134 9.8672 23.2724 10.88C21.3102 9.88832 19.3742 8.96 15.9997 8.96C12.6251 8.96 10.6891 9.88832 8.72695 10.88C9.86537 9.8672 11.1609 8.95232 13.3272 8.46896L13.0906 8C10.3366 8.2568 8.2421 9.92 8.2421 9.92C8.2421 9.92 5.75919 13.4845 5.33301 20.48C7.83483 23.3374 11.636 23.36 11.636 23.36L12.4312 22.3117C11.0814 21.847 9.55895 21.0181 8.2421 19.52C9.81204 20.696 12.1815 21.92 15.9997 21.92C19.8179 21.92 22.1873 20.696 23.7572 19.52C22.4409 21.0181 20.9185 21.847 19.5682 22.3117L20.3633 23.36C20.3633 23.36 24.1645 23.3374 26.6663 20.48C26.2402 13.4845 23.7572 9.92 23.7572 9.92ZM12.8482 18.56C11.9105 18.56 11.1512 17.7008 11.1512 16.64C11.1512 15.5792 11.9105 14.72 12.8482 14.72C13.7859 14.72 14.5451 15.5792 14.5451 16.64C14.5451 17.7008 13.7859 18.56 12.8482 18.56ZM17.4542 16.64C17.4542 17.7008 18.2135 18.56 19.1512 18.56C20.0889 18.56 20.8482 17.7008 20.8482 16.64C20.8482 15.5792 20.0889 14.72 19.1512 14.72C18.2135 14.72 17.4542 15.5792 17.4542 16.64Z'
      fill='white'
    />
  </svg>
)

export default function IconDiscord (props) {
  return <Icon component={SvgDiscord} {...props} />
}