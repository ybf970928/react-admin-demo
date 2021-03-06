import React, { FC } from 'react'
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom'

const NoFoundPage:FC = () => {
    const history = useHistory()

    return (
        <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary" onClick={() => history.push('/')}>Back Home</Button>}
      />
    )
}

export default NoFoundPage