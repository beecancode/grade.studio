import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ClassList({ classes }) {
    return classes.map(({ _id, name, ...rest }) => <Link to={{
        pathname:`/class/${_id}`,
        state:{_id, name, ...rest}
    }} key={_id}>
        <Menu.Item style={{
                color: 'white',
                paddingTop: '15px',
                paddingBottom: '5px',
                marginTop: 'auto',
                fontFamily: 'Pangolin',
                fontSize: '25px'
            }}>{name}</Menu.Item>
    </Link>

    )
}