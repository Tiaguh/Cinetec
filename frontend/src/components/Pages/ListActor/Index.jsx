import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table'
import api from '../../../service/api'

export default function Index(){

    const [actors, setActors] = useState([]);

    useEffect( () => {
        async function getActor(){
            const {data} = await api.get('/actor');
            setActors(data)
        }
        getActor();
    }, [actors]);

    return(
        <>
         <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Sexo</th>
                    <th>Data de Nascimento</th>
                </tr>
            </thead>

            <tbody>
                {
                    actors.map((item) => (
                        <tr key={item.id_ator}>
                            <td>{item.id_ator}</td>
                            <td>{item.nome_ator}</td>
                            <td>{item.sexo}</td>
                            <td>{item.dt_nascimento}</td>
                            
                            <td>
                                <button className="btn modal-trigger btn-editar">Editar</button>
                                <button className="btn modal-trigger btn-excluir">Excluir</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
         </Table>
        </>
    )
}