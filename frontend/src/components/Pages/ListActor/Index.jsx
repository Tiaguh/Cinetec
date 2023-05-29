import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import api from '../../../service/api'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment'

export default function Index() {

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const [actors, setActors] = useState([]);
    const [itemSelected, setItemSelect] = useState([]);

    const [nameActor, setNameActor] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');

    const token = sessionStorage.getItem('token');

    useEffect(() => {
        async function getActor() {
            const { data } = await api.get('/actor', { headers: { 'Authorization': `Bearer ${token}` } });
            setActors(data)
        }
        getActor();
    }, [actors]);


    function handleShowEdit(item) {
        setShowEdit(true);
        setItemSelect(item);
        setNameActor(item.nonme_ator);
        setGender(item.sexo);
        setBirthday(item.dt_nascimento);
    }

    function handleShowDelete(item) {
        setShowDelete(true);
        setItemSelect(item);
    }

    const handleCloseEdit = () => setShowEdit(false);
    const handleCloseDelete = () => setShowDelete(false);

    async function handleUpdateActor() {
        try {
            const dataActor = {
                nameActor,
                gender,
                birthday: moment(birthday).format(),
                idActor: itemSelected.id_ator
            }
            console.log(moment(birthday).format());

            await api.put(`/actor`, dataActor, { headers: { 'Authorization': `Bearer ${token}` } })

            alert("Atualizado com sucesso")
        } catch (error) {
            alert(`Houve um erro ao excluir, ${error}`)
        }
        handleCloseEdit()
    }

    async function handleDeleteActor() {
        try {
            await api.delete(`/actor/${itemSelected.idActor}`, { headers: { 'Authorization': `Bearer ${token}` } });
            alert("Excluido com sucesso");
        } catch (error) {
            alert(`Houve um erro ao excluir. ${error}`)
        }
        handleCloseDelete()
    }

    return (
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