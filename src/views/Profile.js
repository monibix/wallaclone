import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

function Profile() {

    return (
        <div className="columns is-0">
            <div className="column is-one-fifth">
                <Sidebar />
            </div>
            <div className="column">
                <h1 className="title">Tu perfil</h1>
                <h3 className="subtitle">Aquí podrás ver y editar los datos de tu perfil | <Link to="">Ver mi perfil público</Link> </h3>
            </div>
        </div>

    )
}
export default Profile