import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash } from 'react-icons/fi'
import api from './../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Profile(){
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    const [ incidents, setIncidents ] = useState([]);
    const history = useHistory()

    //Para ficar recarregando os casos usamos useEffect(funcao, [] )
    //[] vazio, ele vai executar 'funcao' uma unica vez dentro do fluxo do componente
    useEffect( () => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => { //pegando dados
            //Gravando a resposta desses dados
            setIncidents(response.data)
        })
    }, [ongId] );

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

        //Deletar em tempo real
        setIncidents(incidents.filter(incidents => incidents.id !== id))
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName} </span>

                <Link className="button" to='/incidents/new'>Cadastrar novos casos</Link>
                <button type="button" onClick={handleLogout} >
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1> Casos cadastrados</h1>

            <ul key={incidents.id} >
               {incidents.map(incidents => (
                    <li>
                        <strong>CASO:</strong>
                        <p>{ incidents.title }</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{ incidents.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>

                        <button type="button" onClick={ () => handleDeleteIncident(incidents.id)} >
                            <FiTrash size={20} color="#a8a8b3" />
                        </button>
                    </li>
               ))}
         
            </ul>

        </div>
    )
}